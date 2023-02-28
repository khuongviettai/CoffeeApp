import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import MainHeader from '../components/Header/MainHeader';
import TitleHeader from '../components/Header/TitleHeader';
import MenuSlider from '../components/Home/MenuSlider';
import {POPULAR} from '../data';
import SectionHeader from '../components/Header/SectionHeader';
import PopularList from '../components/Home/PopularList';
import {colors} from '../constants/theme';
import HomeSwiper from '../components/Home/HomeSwiper';
import {SWIPER} from '../data/swiper';
import instance from '../instance/instance';
import {useNavigation} from '@react-navigation/native';
import HomeLoading from '../components/Loading/HomeLoading';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    instance
      .get('/api/products')
      .then(({data}) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: colors.bodyColor}}>
      {loading ? (
        <HomeLoading />
      ) : (
        <>
          <MainHeader title="V&T Coffee" />
          <ScrollView showsVerticalScrollIndicator={false}>
            <HomeSwiper list={SWIPER} />
            <TitleHeader mainTitle="Gợi ý" secondTitle="cho bạn" />
            <MenuSlider list={products} />
            {POPULAR.length > 0 ? (
              <SectionHeader
                title="Phổ biến"
                buttonTitle="Xem thêm"
                onPress={() => {
                  navigation.navigate('Coffee');
                }}
              />
            ) : null}

            <PopularList list={products} />
          </ScrollView>
        </>
      )}
    </View>
  );
};

export default HomeScreen;
