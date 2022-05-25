import {View, StyleSheet} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import colors from '../../utils/colors';

export default class App extends React.Component {
  constructor(props) {
    const {images} = props;
    super(props);
    this.state = {images};
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={'110%'}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          parentWidth={this.state.width}
          dotColor={colors.Orange}
          inactiveDotColor={colors.Gray_100}
          dotStyle={styles.indicator}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  indicator: {
    width: 12,
    height: 12,
    borderRadius: 15,
    marginBottom: 15,
    marginHorizontal: 2,
  },
});
