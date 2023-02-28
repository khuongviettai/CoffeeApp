import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {colors, spacing} from '../../constants/theme';

const windowWidth = 65;
const windowHeight = 65;
const MenuProduct = ({list}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        // height: 150,
        justifyContent: 'flex-start',
        marginBottom: 50,
      }}>
      {list &&
        list.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={
                index === item.length - 1
                  ? {marginLeft: 0}
                  : {marginLeft: spacing.l, marginBottom: -25}
              }>
              <View
                style={{
                  marginVertical: spacing.xl,
                  borderWidth: 0.1,
                  borderColor: colors.mainColor,
                  height: 10,
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
              <View
                style={{
                  alignItems: 'center',
                  width: 65,
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 13,
                    fontWeight: '300',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default MenuProduct;
