import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {colors} from '../constants/theme';
import SearchInput from '../components/Search/SearchInput';
import MainHeader from '../components/Header/MainHeader';
import ShowSearch from '../components/Search/ShowSearch';
import SearchMasonryList from '../components/Search/SearchMasonryList';

const tabs = [
  {
    title: 'Coffee',
    content: () => <SearchMasonryList />,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, backgroundColor: colors.white}}>
        <MainHeader title="Tìm kiếm" />
        <SearchInput />
        <ShowSearch items={tabs} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
