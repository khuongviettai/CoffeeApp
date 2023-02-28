import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {colors, spacing} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const CartButton = () => {
  return (
    <View
      style={{
        marginVertical: spacing.l,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%',
        // backgroundColor: '#fff',
        // direction: 'rtl',
      }}>
      <TouchableOpacity
        style={{
          height: 60,
          width: windowWidth - 48,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: spacing.l,
          backgroundColor: colors.mainColor,
          position: 'absolute',
          bottom: 0,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#F6F6F9',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Thanh Toán
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartButton;
