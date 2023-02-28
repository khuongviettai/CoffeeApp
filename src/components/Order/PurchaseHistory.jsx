import React from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SINGLEPRODUCT} from '../../data/index';
import {spacing, colors} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const PurchaseHistory = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          width: windowWidth,
          backgroundColor: colors.white,
          marginTop: spacing.l,
        }}>
        {SINGLEPRODUCT &&
          SINGLEPRODUCT.map((item, index) => {
            return (
              <View key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: spacing.l,
                  }}>
                  <Text>Mã đơn hàng: {item.id}</Text>
                  <TouchableOpacity>
                    <Text style={{color: colors.mainColor}}>Đánh giá</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: spacing.l,
                    marginTop: 10,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text>{item.title}</Text>
                    <Text> X{item.quality}</Text>
                  </View>
                  <Text>{item.price}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginHorizontal: spacing.l,
                    marginTop: 10,
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 80,
                      height: 40,
                      backgroundColor: colors.mainColor,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{color: colors.white}}>Mua lại</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default PurchaseHistory;
