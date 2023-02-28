import React from 'react';
import {ScrollView, View} from 'react-native';
import Other from '../components/Other/Other';
import {colors} from '../constants/theme';
import MainHeader from '../components/Header/MainHeader';

const OtherScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      <MainHeader title="Khác" />
      <ScrollView>
        <Other />
      </ScrollView>
    </View>
  );
};

export default OtherScreen;
