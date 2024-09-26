import { StyleSheet } from 'react-native';
import { BLACK, PINK, WHITE, YELLOW } from '../../../constants/colors';

const style = StyleSheet.create({
  modal: {
    backgroundColor: WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    elevation: 24,
    flex: 1,
    flexDirection: 'column',
    height: '92.5%',
    paddingHorizontal: 5,
    paddingTop: 5,
    paddingBottom: 20,
    position: 'absolute',
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    flexGrow: 1,
    shadowOpacity: 0.4,
    shadowRadius: 30,
    width: '100%',
  },
  toggle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
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
  sectionContainer: {
    flex: 1,
  },
  badge: {
    backgroundColor: YELLOW,
    height: 15,
    width: 15,
    borderRadius: 25,
    position: 'absolute',
    right: -5,
    top: -2,
  },
  buttonText2: {
    fontSize: 16,
    marginLeft: 5,
    color: PINK,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
});

export default style;
