import React from 'react';
import {FlatList, Image, TouchableOpacity, View, Text} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const Card_Width = sizes.width - 80;
const Card_Height = 200;
const Card_Width_Spacing = Card_Width + spacing.l;
const MenuSlider = ({list}) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={list.slice(0, 3)}
      horizontal
      snapToInterval={Card_Width_Spacing}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      // keyExtractor={i => {
      //   return i.id;
      // }}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}
            onPress={() => {
              navigation.navigate('ProductDetails', {product: item});
            }}>
            <View
              key={index}
              style={{
                width: Card_Width,
                height: Card_Height,
                backgroundColor: colors.white,
                overflow: 'hidden',
                shadowColor: colors.black,
                shadowRadius: 4,
                borderRadius: sizes.radius,
                shadowOpacity: 0.1,
                shadowOffset: {width: 0, height: 2},
                marginVertical: 5,
              }}>
              <View
                style={{
                  width: Card_Width,
                  height: Card_Height,
                  borderRadius: sizes.radius,
                  overflow: 'hidden',
                }}>
                <Image
                  // key={index}
                  source={{uri: item.image[0]}}
                  style={{
                    width: Card_Width,
                    height: Card_Height,
                    resizeMode: 'cover',
                  }}
                />
              </View>
              <View
                style={{position: 'absolute', top: Card_Height - 40, left: 18}}>
                <Text
                  style={{
                    fontSize: sizes.h3,
                    fontWeight: '600',
                    color: colors.mainColor,
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default MenuSlider;
