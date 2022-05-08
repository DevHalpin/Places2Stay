import React from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import homeMockData from './components/homeMockData';
import PlaceCta from './components/PlaceCta';
import SectionHeader from './components/SectionHeader';

const Home: React.FC = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Button
          title="Search Input"
          styles={StyleSheet.flatten([styles.spacing, styles.search])}
          onPress={() => navigation.navigate('Search')}
        />
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
