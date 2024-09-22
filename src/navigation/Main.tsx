import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PreviewScreen from '../screens/PreviewScreen';
import { PINK, WHITE } from '../constants/colors';

const Main = () => {
    const Stack = createNativeStackNavigator();

    const options: NativeStackNavigationOptions = {
        title: 'Hotels',
        headerStyle: {
          backgroundColor: PINK,
        },
        headerTintColor: WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={options}/>
        <Stack.Screen name="Preview" component={PreviewScreen}  options={options}/>
      </Stack.Navigator>
    );
};

export default Main;
