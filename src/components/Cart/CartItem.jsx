import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {sizes, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';

const CartItem = ({list}) => {
  return (
    <View>
      {list.map((item, index) => {
        return (
          <View
            style={{
              minHeight: 120,
              backgroundColor: 'white',
              marginVertical: spacing.s,
              marginHorizontal: spacing.l,
              paddingHorizontal: 10,
              flexDirection: 'row',
              borderRadius: sizes.radius,
            }}
            key={index}>
            <Image
              source={item.image[0]}
              style={{
                width: 100,
                height: 100,
                borderRadius: sizes.radius,
                marginTop: spacing.s,
              }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: spacing.m,
                marginTop: spacing.s,
                height: 100,
              }}>
              <Text>
                {item.title} X{5}
              </Text>
              <Text style={{marginVertical: 2, color: '#8b8989'}}>
                {item.price.toLocaleString('vi', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Text>
              <View>
                <Text style={{marginVertical: 2, color: '#8b8989'}}>
                  Size: {item.size}
                </Text>
                {item.topping &&
                  item.topping.map((topping, i) => (
                    <View key={i}>
                      <Text style={{color: '#8b8989'}}>{topping}</Text>
                    </View>
                  ))}
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Icon
                  icon="Trash"
                  style={{
                    marginTop: spacing.s,
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default CartItem;
