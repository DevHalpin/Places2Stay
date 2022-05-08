import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Text from '../../components/base/text';
import homeMockData from './components/homeMockData';
import PlaceCta from './components/PlaceCta';
import SectionHeader from './components/SectionHeader';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Text styles={StyleSheet.flatten([styles.spacing, styles.search])}>
          Search Input
        </Text>
        {homeMockData.sections.map(section => (
          <>
            <SectionHeader
              title={section.title}
              description={section.description}
              styles={styles.spacing}
            />
            {section.places.map(place => (
              <PlaceCta
                styles={styles.spacing}
                imageLabel={place.imageLabel}
                image={place.image}
                title={place.title}
                location={place.location}
              />
            ))}
          </>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {marginHorizontal: 8},
  spacing: {marginBottom: 16},
  search: {fontSize: 24},
});

export default Home;
