import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../constants/theme';
import SearchInput from '../components/Search/SearchInput';
import MainHeader from '../components/Header/MainHeader';
import ShowSearch from '../components/Search/ShowSearch';

const tabs = [
  {
    title: 'Coffee',
    content: () => (
      <View>
        <Text>Coffee</Text>
      </View>
    ),
  },
  {
    title: 'Trà',
    content: () => (
      <View>
        <Text>Coffee</Text>
      </View>
    ),
  },
  {
    title: 'Sack',
    content: () => (
      <View>
        <Text>Coffee</Text>
      </View>
    ),
  },
];

const SearchScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.light}}>
      <MainHeader />
      <SearchInput />
      <ShowSearch items={tabs} />
    </View>
  );
};

export default SearchScreen;
