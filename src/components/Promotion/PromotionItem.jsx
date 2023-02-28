import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
const CardWidth = sizes.width / 2 - (spacing.l + spacing.l / 3 - 20);
const CardHeight = 220;
const PromotionItem = ({list}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: spacing.l,
      }}>
      {list.map((item, index) => {
        return (
          <View
            key={index}
            style={{marginLeft: spacing.s, marginBottom: spacing.l}}>
            <View
              style={{
                width: CardWidth,
                height: CardHeight,
                backgroundColor: colors.white,
                borderRadius: 8,
                shadowColor: colors.black,
                shadowRadius: 4,
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 2},
                overflow: 'hidden',
              }}>
              <TouchableOpacity
                style={{
                  overflow: 'hidden',
                }}
                onPress={() => {
                  navigation.navigate('PromotionDetail', {promotion: item});
                }}>
                <Image
                  style={{
                    width: CardWidth,
                    height: CardHeight,
                    resizeMode: 'stretch',
                  }}
                  source={item.image}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // marginTop: 6,
                marginLeft: spacing.s,
                marginRight: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    marginVertical: 4,
                    fontSize: 13,
                    fontWeight: '400',
                    color: colors.black,
                  }}>
                  {item.title}
                </Text>
                <Text style={{fontSize: 12, color: colors.gray}}>
                  Hết hạn {item.enDate}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginVertical: 5}}>
              <Text
                style={{
                  color: colors.mainColor,
                  marginLeft: spacing.s,
                  fontSize: 18,
                  fontWeight: '600',
                }}>
                Sử dụng ngay
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default PromotionItem;
