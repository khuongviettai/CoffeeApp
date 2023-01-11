import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';

const windowWidth = 100;
const windowHeight = 100;
const MenuProduct = ({list}) => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{marginLeft: spacing.l, marginBottom: spacing.l}}>
            <View
              style={{
                marginVertical: spacing.xl,
                borderWidth: 0.1,
                borderColor: colors.mainColor,
              }}>
              <Image
                style={{
                  width: windowWidth,
                  height: windowHeight,
                  resizeMode: 'cover',
                  borderRadius: (windowWidth + windowHeight) / 2,
                }}
                source={item.image}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MenuProduct;
