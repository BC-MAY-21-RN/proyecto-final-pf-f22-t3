import * as React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: 'Item 1',
          image:
            'https://i.pinimg.com/736x/21/43/7f/21437f0bd7a33ce7bc5e7c4ec33c7fea.jpg',
        },
        {
          title: 'Item 2',
          image:
            'https://huilamagnifica.com/wp-content/uploads/2019/05/Mirador-La-Mano-del-Gigante-Municipio-de-Gigante-Huila-Magnifica-01.jpg',
        },
        {
          title: 'Item 3',
          image:
            'https://encolombia.com/wp-content/uploads/2020/01/Desierto-de-la-Tatacoa-696x391.jpg',
        },
      ],
    };
  }
  _renderItem({item, index}) {
    return (
      <View>
        <Image
          source={{uri: item.image}}
          style={{
            borderRadius: 15,
            height: 300,
            width: 290,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
          }}
        />
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, paddingTop: 50}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
