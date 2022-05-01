import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import RNBounceable from '@freakycoder/react-native-bounceable';
import VectorImage from 'react-native-vector-image';
import colors from '../utils/colors';
import MultipleImagePicker from '@baronha/react-native-multiple-image-picker';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const PickerImage = ({maxSelectedAssets = 3}) => {
  const [images, setImages] = useState([]);

  const openPicker = async () => {
    try {
      const response = await MultipleImagePicker.openPicker({
        selectedAssets: images,
        maxSelectedAssets: maxSelectedAssets,
        isExportThumbnail: true,
        usedCameraButton: false,
        doneTitle: 'Terminar',
        selectedColor: 'red',
      });
      console.log('response: ', response);
      setImages(response);
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  const onDelete = value => {
    const data = images.filter(
      item =>
        item?.localIdentifier &&
        item?.localIdentifier !== value?.localIdentifier,
    );
    setImages(data);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={img}>
        <Image style={styles.imgItem} source={{uri: item.path}} />
        <Pressable
          onPress={() => onDelete(item)}
          style={{position: 'absolute', top: 2, right: 2}}>
          <VectorImage
            style={{
              width: 22,
              height: 22,
            }}
            source={require('../assets/img/removex.svg')}
          />
        </Pressable>
      </View>
    );
  };
  return (
    <RNBounceable
      style={container}
      onPress={() => {
        openPicker();
      }}>
      <FlatList
        style={styles.imgContainer}
        data={images}
        keyExtractor={(item, index) => (item?.filename ?? item?.path) + index}
        renderItem={renderItem}
        numColumns={3}
      />
      {images.length === 0 && (
        <VectorImage
          style={styles.imgItem}
          source={require('../assets/img/image.svg')}
        />
      )}
      <Text style={styles.pickImgTitle}>Añade las fotos de tu mascota</Text>
      <Text style={styles.pickImgSubTitle}>(max 6 Mb)</Text>
    </RNBounceable>
  );
};

export default PickerImage;

const styles = StyleSheet.create({
  border: {
    borderStyle: 'dashed',
    borderColor: colors.Gray_400,
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    paddingVertical: 15,
    backgroundColor: colors.Gray_100,
    alignItems: 'center',
  },
  imgContainer: {
    flexDirection: 'row',
  },
  img: {
    padding: 2,
    marginRight: 8,
  },
  imgItem: {height: 70, width: 70, borderRadius: 10},
  pickImgTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 10,
  },
  pickImgSubTitle: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_300,
  },
});

const container = StyleSheet.compose(styles.container, styles.border);
const img = StyleSheet.compose(styles.img, styles.border);
