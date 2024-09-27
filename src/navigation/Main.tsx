import React, { FC } from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PreviewScreen from '../screens/PreviewScreen';
import { PINK, WHITE } from '../constants/colors';
import { View } from 'react-native';
import ActionButton from '../components/common/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

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

  const GoBackButton: FC<{ navigation: NavigationProp<RootStackParamList> }> = ({ navigation }) => {
    return (
      <View style={{ marginLeft: -20 }}>
        <ActionButton onPress={() => navigation.goBack()}>
          <FontAwesomeIcon color={WHITE} icon={'chevron-left'} />
        </ActionButton>
      </View>
    );
  };

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={options} />
      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={({ route, navigation }) => ({
          ...options,
          ...{
            headerLeft: () => <GoBackButton navigation={navigation} />,
          },
          ...{ title: route.params?.name || 'Hotel' },
        })}
      />
    </Stack.Navigator>
  );
};

export default Main;
