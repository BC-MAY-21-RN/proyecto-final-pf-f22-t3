'use strict';
import {StyleSheet} from 'react-native';
import colors from './colors';

module.exports = StyleSheet.create({
  box_header: {
    backgroundColor: colors.Gray_100,
    height: '20%',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign:'center',
  },
  box_footer: {
    height: '80%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  box_title: {
    fontSize: 22,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Black,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 0,
    width: '100%',
  },
  box_subtitle: {
    fontSize: 16,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Black,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 0,
    width: '100%',
  },
  box_little: {
    fontSize: 14,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_300,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 0,
    //width: 'auto',
  },
  box_profileimg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  box_button: {
    color: colors.Gray_500,
    fontSize: 16,
    textAlign:'center',
  },
  button_tab: {
    width: '33%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    textAlign:'center',
  },
  box_buttonOrange: {
    width: '100%',
    color: colors.Gray_100,
    backgroundColor: colors.Orange,
    fontSize: 16,
    textAlign:'center',
    borderRadius: 15,
    height: 30,
  },
  width20: {
    width: '20%',
    padding: 0,
    margin: 0,
    alignItems: 'center',
    textAlign:'center',
  },
  width60: {
    width: '60%',
    padding: 0,
    margin: 0,
  },
  width100: {
    width: '100%',
    padding: 0,
    marginTop: -10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconEdit: {
    position: 'absolute',
  }
});

