import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Text from '../../components/base/text';
import PlaceCta from './components/PlaceCta';
import SectionHeader from './components/SectionHeader';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Input</Text>
      <SectionHeader
        title="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
      <PlaceCta />
      <PlaceCta />
      <PlaceCta />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 8},
});

export default Home;
