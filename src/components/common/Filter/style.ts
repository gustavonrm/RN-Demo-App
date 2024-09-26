import { StyleSheet } from 'react-native';
import { BLACK, GREY, PINK, WHITE } from '../../../constants/colors';

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
  toggle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 75,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  button: {
    backgroundColor: PINK,
    borderRadius: 25,
    paddingVertical: 5,

    paddingHorizontal: 20,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
    color: WHITE,
    fontWeight: 'bold',
  },
});

export default style;
