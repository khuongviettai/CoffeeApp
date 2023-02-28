import React from 'react';
import {Image, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors, sizes, spacing} from '../../constants/theme';

const HomeSwiper = ({list}) => {
  return (
    <View
      style={{
        height: 200,
        marginTop: spacing.l,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: sizes.radius,
        overflow: 'hidden',
      }}>
      <Swiper autoplay={true} loop={true} activeDotColor={colors.mainColor}>
        {list.map((item, index) => {
          return (
            <View
              style={{
                flex: 1,
              }}
              key={index}>
              <Image
                source={item.image}
                style={{width: '100%', height: '100%'}}
                resizeMode="stretch"
              />
            </View>
          );
        })}
      </Swiper>
    </View>
  );
};

export default HomeSwiper;
