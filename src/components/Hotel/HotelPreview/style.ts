import { StyleSheet } from 'react-native';
import { BLACK, GREY, PINK, WHITE } from '../../../constants/colors';

const style = StyleSheet.create({
  body: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 100,
  },
  image: {
    flex: 1,
    width: 390,
    height: 250,
    borderRadius: 10,
    margin: 1,
  },
  stars: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: BLACK,
    fontSize: 24,
    marginVertical: 2,
  },
  subtitle: {
    fontWeight: '600',
    color: BLACK,
    fontSize: 20,
    marginTop: 2,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: BLACK,
    fontWeight: '400',
    alignItems: 'center',
    marginVertical: 3,
  },
  divider: {
    borderWidth: 1,
    borderColor: GREY,
    marginVertical: 10,
  },
  container: {
    backgroundColor: WHITE,
  },
  textIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: -5,
    marginTop: 5,
  },
  bottomContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    backgroundColor: PINK,
    flexGrow: 1,
    width: '100%',
    padding: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  bookButton: {
    minWidth: 150,
  },
});

export default style;
