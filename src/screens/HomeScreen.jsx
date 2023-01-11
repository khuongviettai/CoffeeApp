import React from 'react';
import {ScrollView, View} from 'react-native';
import MainHeader from '../components/Header/MainHeader';
import TitleHeader from '../components/Header/TitleHeader';
import MenuSlider from '../components/Home/MenuSlider';
import {Top_Sell, POPULAR} from '../data';
import SectionHeader from '../components/Header/SectionHeader';
import PopularList from '../components/Home/PopularList';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fbfbfb'}}>
      <MainHeader />
      <TitleHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MenuSlider list={Top_Sell} />
        <SectionHeader title="Phổ biến" buttonTitle="More" onPress={() => {}} />
        <PopularList list={POPULAR} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
