import React from 'react';
import {Text, View} from 'react-native';
import {spacing} from '../../constants/theme';

const TotalCart = () => {
  return (
    <View
      style={{
        // flex: 1,
        // backgroundColor: '#fff',
        marginRight: spacing.l,
        marginLeft: spacing.l,
        height: 120,
      }}>
      <View>
        <Text style={{fontSize: 16, fontWeight: '300'}}>
          Chi tiết thanh toán
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginRight: spacing.l,
          marginLeft: spacing.s,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: '300'}}>Tổng tiền hàng</Text>
          <Text style={{fontSize: 16, fontWeight: '300'}}>30.000</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontWeight: '300'}}>Khuyễn mãi</Text>
          <Text style={{fontSize: 16, fontWeight: '300'}}>30.000</Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Tổng thanh toán</Text>
          <Text style={{fontSize: 16, fontWeight: '300'}}>0.000</Text>
        </View>
      </View>
    </View>
  );
};

export default TotalCart;
