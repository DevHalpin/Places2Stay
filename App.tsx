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
import Home from './src/screen/Home';
import Search from './src/screen/Search';
import Stay from './src/screen/Stay';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Stay" component={Stay} key="Stay" />
        <Tab.Screen name="Home" component={Home} key="Home" />
        <Tab.Screen name="Search" component={Search} key="Search" />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
