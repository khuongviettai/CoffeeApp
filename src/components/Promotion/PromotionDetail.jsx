import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {sizes, spacing} from '../../constants/theme';

const PromotionDetail = ({route}) => {
  const {promotion} = route.params;
  return (
    <ScrollView
      style={{
        width: Dimensions.get('window').width - spacing.l * 2,
        marginHorizontal: spacing.l,
      }}>
      <Text
        style={{
          marginTop: spacing.l,
          fontSize: sizes.h2,
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>
        {promotion.title}
      </Text>
      <Image
        source={promotion.image}
        style={{width: '100%', height: 250, marginTop: 20}}
        resizeMode="stretch"
      />
      <Text
        style={{
          marginTop: spacing.l,
          fontSize: 12,
          fontWeight: '500',
          lineHeight: 20,
        }}>
        {promotion.desc}
      </Text>

      <Text
        style={{
          marginTop: spacing.l,
          fontSize: 12,
          fontWeight: 'bold',
          lineHeight: 20,
        }}>
        * Nhập mã: {promotion.code}
      </Text>
      <Text
        style={{
          marginTop: spacing.l,
          fontSize: 12,
          fontWeight: 'bold',
          lineHeight: 20,
        }}>
        * Ngày hết hạn: {promotion.enDate}
      </Text>
    </ScrollView>
  );
};

export default PromotionDetail;
