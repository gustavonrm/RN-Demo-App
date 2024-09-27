import { StyleSheet } from 'react-native';
import { BLACK } from '../../../constants/colors';

const style = StyleSheet.create({
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '400',
    alignItems: 'center',
    marginVertical: 3,
  },
});

export default style;
