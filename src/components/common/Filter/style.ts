import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '../../../constants/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    elevation: 24,
    flex: 1,
    flexDirection: 'column',
    height: '92.5%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    position: 'absolute',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.4,
    shadowRadius: 30,
    width: '100%',
  },
});

export default style;
