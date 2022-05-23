import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../utils/colors';
import { ScrollView } from 'react-native-virtualized-view';

export default function ListComments(props) {
  const {comments} = props;
  return (
    <View style={styles.containerList}>
      <FlatList
        nestedScrollEnabled
        data={comments}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CommentView comment={item} />}
      />
    </View>
  );
}

const CommentView = item => {
  const {comment, user, photoUser, createdAt} = item.comment;
  let date = '';
  let newDate = '';
  if (createdAt) {
    date = createdAt.toDate();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    newDate = date.toLocaleDateString('es-ES', options);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={{uri: photoUser}} style={styles.image} />
        <View style={styles.containerText}>
          <View styles={styles.containerTitle}>
            <Text style={styles.textUser}>{user}</Text>
            <Text style={styles.textDate}>{newDate}</Text>
          </View>
          <Text style={styles.txtComment}>{comment}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    marginTop: 10,
    height: '65%',
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 0,
    marginLeft: 10,
    backgroundColor: colors.Gray_200,
    width: 380,
    borderRadius: 24,
    padding: 5,
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.Orange,
  },
  containerTitle: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  containerText: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  textUser: {
    fontSize: 16,
    color: colors.Gray_500,
  },
  textDate: {
    fontSize: 14,
    color: colors.Gray_400,
  },
  txtComment: {
    fontSize: 15,
    color: colors.Gray_500,
  },
});
