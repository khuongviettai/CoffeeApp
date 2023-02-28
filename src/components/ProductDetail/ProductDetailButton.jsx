import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const ProductDetailButton = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        width: windowWidth,
        position: 'absolute',
        height: 100,
        backgroundColor: colors.white,
        bottom: 0,
        flexDirection: 'row',
        borderTopWidth: 0.5,
        borderColor: colors.lightGray,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity
        style={{
          top: 12,
          width: '49%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          backgroundColor: colors.mainColor,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Cart')}>
        <Text style={{fontSize: 15, color: colors.white, fontWeight: 'bold'}}>
          Giỏ hàng
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          top: 12,
          width: '49%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          backgroundColor: colors.mainColor,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 15, color: colors.white, fontWeight: 'bold'}}>
          Thêm
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailButton;
