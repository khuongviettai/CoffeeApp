import React from 'react';
import {View} from 'react-native';
import PromoItem from '../components/Promotion/PromotionItem';
import {UUDAI} from '../data/uudai';
import MainHeader from '../components/Header/MainHeader';

const PromotionScreen = () => {
  return (
    <View>
      <MainHeader title="Ưu đãi" />
      <PromoItem list={UUDAI} />
    </View>
  );
};

export default PromotionScreen;
