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
import {SafeAreaView, StyleSheet} from 'react-native';
// import Home from './src/screen/Home';
import Stay from './src/screen/Stay';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Home /> */}
      <Stay />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 8},
});

export default App;
