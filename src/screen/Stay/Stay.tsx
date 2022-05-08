import React from 'react';
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import Text from '../../components/base/text';
import StayDetail from './component/StayDetail';
import stayMockData from './stayMockData';

const Stay: React.FC = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={stayMockData.image} style={styles.image} />
        <View style={styles.detailContainer}>
          <Text styles={styles.title}>408 St. Jacques | Room #208</Text>
          <Text styles={styles.location}>Old Montreal, Montreal</Text>
          <Text styles={styles.dates}>Oct. 29, 2021 - Oct. 31, 2021</Text>
          {stayMockData.details.map(detail => (
            <StayDetail sectionTitle={detail.title} items={detail.items} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 220,
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
  },
  location: {
    fontSize: 16,
    color: 'darkgrey',
    marginBottom: 4,
  },
  detailContainer: {
    marginHorizontal: 24,
  },
  dates: {marginBottom: 16},
});

export default Stay;
