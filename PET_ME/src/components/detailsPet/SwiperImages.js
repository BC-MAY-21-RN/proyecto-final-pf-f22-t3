import {StyleSheet, View, Dimensions, Image} from 'react-native';
import React from 'react';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import colors from '../../utils/colors';

const SwiperImages = ({data}) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={0}
        showPagination
        paginationStyle={{marginBottom: 30}}
        paginationStyleItem={{width: 10, height: 10}}
        paginationStyleItemActive={{backgroundColor: colors.Orange}}
        data={data}
        renderItem={({item}) => (
          <View style={styles.child}>
            <Image style={styles.image} source={{uri: item}} />
          </View>
        )}
      />
    </View>
  );
};

export default SwiperImages;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 2, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  image: {
    height: height * 0.5,
    width,
  },
});
