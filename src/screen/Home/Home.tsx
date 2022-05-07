import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Text from '../../components/base/text';
import PlaceCta from './components/PlaceCta';
import SectionHeader from './components/SectionHeader';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text styles={StyleSheet.flatten([styles.spacing, styles.search])}>
        Search Input
      </Text>
      <SectionHeader
        title="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
        styles={styles.spacing}
      />
      <PlaceCta
        styles={styles.spacing}
        imageLabel="From $126"
        title="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
      />
      <PlaceCta
        styles={styles.spacing}
        imageLabel="From $126"
        title="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
      />
      <PlaceCta
        styles={styles.spacing}
        imageLabel="From $126"
        title="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 8},
  spacing: {marginBottom: 16},
  search: {fontSize: 24},
});

export default Home;
