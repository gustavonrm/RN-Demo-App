import { StyleSheet } from 'react-native';
import { GREY, PINK, WHITE } from '../../constants/colors';

const style = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:1,
        borderColor: GREY,
        borderRadius: 10,
        backgroundColor: WHITE,
        marginVertical: 10,
    },
    image:{
        flex:1,
        width: undefined,
        height: undefined,
        borderRadius: 10,
    },
    priceContainer:{
     position: 'absolute',
       fontWeight: 'bold',
       right: 0,
       bottom: 0,
       margin: 10,
       alignItems: 'flex-end',
    },
    priceText:{
          fontWeight: 'bold',
          color: WHITE,
            fontSize: 24,
          textShadowColor: PINK,
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 4,
       },
    priceText2:{
        fontWeight: '100!important',
        color: WHITE,
        fontSize: 14,
        textShadowColor: PINK,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 4,
     },
     priceText3:{
        fontWeight: 'bold',
        color: WHITE,
          fontSize: 14,
        textShadowColor: PINK,
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 4,
        marginTop: 5,
     },
    top:{
        borderRadius: 10,
        height: 200,
        flex: 1,
        flexDirection: 'column',
    },
    bottom:{
        flex: 1,
        flexDirection: 'column',
        margin: 10,
    },
});

export default style;
