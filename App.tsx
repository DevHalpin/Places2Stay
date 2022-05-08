/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Stay from './src/screen/Stay';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const config = {
  screens: {
    Tab: {
      screens: {
        Home: {
          screens: {
            Home: 'home',
          },
        },
        Stay: {
          screens: {
            Stay: 'stay',
          },
        },
      },
    },
  },
};

const linking = {
  prefixes: ['places2stay://'],
  config,
};

const TabScreen = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="Stay" component={Stay} key="Stay" />
    <Tab.Screen name="Home" component={Home} key="Home" />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Tab" component={TabScreen} key="Tab" />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}} key="Search">
          <Stack.Screen name="Search" component={Search} key="Search" />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
