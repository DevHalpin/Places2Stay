import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Text from '../../components/base/text';
import searchMockData from './searchMockData';

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  searchInput: {
    width: '85%',
    height: 60,
    borderColor: 'lightblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 32,
    textAlign: 'center',
    fontSize: 24,
  },
  searchInputContainer: {
    marginBottom: 16,
    alignItems: 'center',
  },
  searchResultContainer: {
    margin: 12,
  },
  searchResult: {
    fontSize: 16,
    color: 'darkgrey',
    marginBottom: 8,
  },
  searchResultsScrollView: {height: '90%'},
});

type City = {
  id: number;
  label: string;
};

const Search: React.FC = () => {
  const [searchInput, onSearchInput] = useState<string>('');
  const [searchResult, onSearchResult] = useState<City[]>([]);

  useEffect(() => {
    const citySearchResult = searchMockData.cities.filter(({label}) =>
      label.toLowerCase().includes(searchInput.toLowerCase()),
    );
    onSearchResult(citySearchResult);
  }, [searchInput]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={'Try "Boston"'}
          onChangeText={onSearchInput}
        />
      </View>
      <ScrollView style={styles.searchResultsScrollView}>
        {searchResult.map(city => (
          <View style={styles.searchResultContainer} key={city.id}>
            <Text style={styles.searchResult}>{city.label}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
