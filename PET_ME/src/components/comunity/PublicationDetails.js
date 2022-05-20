import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CardComunity from './CardComunity';
import {useNavigation} from '@react-navigation/native';
import {
  getPublicationComments,
  addComments,
  editComments,
} from '../../services/comunityServices';
import BgPaws from '../BgPaws';
import colors from '../../utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import ListComments from './ListComments';
import useAuth from '../../hooks/useAuth';
import firestore from '@react-native-firebase/firestore';
import Uuid from 'react-native-uuid';

export default function PublicationDetails(props) {
  const {
    navigation,
    route: {params},
  } = props;
  const {publication} = params;
  const [isLoading, setIsLoading] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const {authUser} = useAuth();
  const [colorText, setColorText] = useState(colors.Gray_500);
  const [haveComments, setHaveComments] = useState(false);

  const colorPlane = isComment ? colors.Orange : colors.Gray_300;

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.goBack()} style={styles.buttonBack}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={colors.Orange}
            size={20}
            style={{marginLeft: 5, marginTop: -20}}
            onPress={navigation.goBack}
          />
          <Text style={styles.textIcon}>Regresar</Text>
        </Pressable>
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      const res = await getPublicationComments(publication.id);
      if (res) {
        const commentsData = [];
        res.comments.forEach(comment => {
          commentsData.push({
            id: comment.id,
            comment: comment.comment,
            user: comment.user,
            createdAt: comment.createdAt,
            photoUser: comment.photoUser,
          });
        });
        setComments(commentsData);
        setHaveComments(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (comment.length > 40) {
      setColorText({
        color: colors.Red,
      });
    } else {
      setColorText({
        color: colors.Gray_500,
      });
    }
    if (comment.length <= 40 && comment.length > 0) {
      setIsComment(true);
    } else {
      setIsComment(false);
    }
  }, [comment]);

  const editComt = async () => {
    try {
      setIsAdd(true);
      comments.push({
        id: Uuid.v4(),
        comment: comment,
        user: authUser.name,
        createdAt: firestore.Timestamp.fromDate(new Date()),
        photoUser: authUser.photo,
        userid: authUser.email,
      });
      const res = await editComments(publication.id, comments);
      if (res) {
        setComment('');
        setIsAdd(false);
        setColorText(colors.Gray_500);
      }
      setIsAdd(false);
    } catch (error) {
      setIsAdd(false);
      console.log(error);
    }
  };

  const addComt = async () => {
    setIsAdd(true);
    comments.push({
      id: Uuid.v4(),
      comment: comment,
      user: authUser.name,
      createdAt: firestore.Timestamp.fromDate(new Date()),
      photoUser: authUser.photo,
      userid: authUser.email,
    });
    try {
      const res = await addComments(publication.id, comments);
      if (res) {
        setIsAdd(false);
        setComment('');
        setHaveComments(true);
      } else {
        setIsAdd(false);
        setComment('');
        Alert.alert(
          'Error con comentario',
          'Fallo a la hora de agregar tu comentario',
        );
      }
      setComment('');
      setIsAdd(false);
      console.log('Comment added');
    } catch (error) {
      console.log(error);
      setIsAdd(false);
    }
  };

  return (
    <BgPaws opacity={0.2}>
      <View style={styles.container}>
        <View style={styles.cardComunity}>
          <View style={styles.divHeader} />
          <CardComunity
            publication={publication}
            isComment={true}
            style={styles.cardComunity}
          />
        </View>
        <View>
          {haveComments ? <ListComments comments={comments} /> : null}
        </View>
        <TouchableOpacity style={styles.touchableOpacity}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Escribe un comentario..."
              onChangeText={text => setComment(text)}
              value={comment}
              multiline={true}
            />
            <Text style={[styles.textNum, colorText]}>
              {40 - comment.length}
            </Text>
          </View>
          {isAdd ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <FontAwesomeIcon
              icon={faPaperPlane}
              size={40}
              color={colorPlane}
              onPress={() => {
                haveComments ? editComt() : addComt();
              }}
            />
          )}
        </TouchableOpacity>
      </View>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: '110%',
    marginLeft: -20,
    height: 200,
  },
  divHeader: {
    width: '100%',
    height: 40,
    backgroundColor: colors.Gray_200,
  },
  buttonBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 20,
    color: colors.Orange,
    marginLeft: 5,
    marginTop: -20,
  },
  cardComunity: {
    width: '100%',
    height: 370,
    backgroundColor: colors.Gray_200,
  },
  touchableOpacity: {
    position: 'absolute',
    left: '1%',
    bottom: 5,
    flexDirection: 'row',
    padding: 12,
    borderRadius: 50,
  },
  inputContainer: {
    width: '85%',
    height: 50,
    borderColor: colors.Gray_500,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 2,
    backgroundColor: colors.Gray_200,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 16,
    color: colors.Gray_500,
    width: '97%',
  },
  textNum: {
    fontSize: 16,
    color: colors.Gray_500,
    marginLeft: 'auto',
  },
});
