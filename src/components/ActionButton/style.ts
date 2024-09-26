import { StyleSheet } from 'react-native';
import { PINK, WHITE } from '../../constants/colors';

const style = StyleSheet.create({
  button: {
    backgroundColor: PINK,
    borderColor: PINK,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  button2: {
    backgroundColor: WHITE,
    borderColor: PINK,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
});

export default style;
