import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import AddItem from '../../utils/AddItem';

const CardHeight = 220;
const ProductCard = ({props}) => {
  return (
    <ScrollView>
      return (
      <View
        style={{
          marginLeft: spacing.l,
          marginBottom: spacing.l,
          marginRight: spacing.l,
        }}>
        <View>
          <View
            style={{
              backgroundColor: colors.white,
              borderRadius: sizes.radius,
              shadowColor: colors.black,
              shadowRadius: 4,
              shadowOpacity: 0.1,
              shadowOffset: {width: 0, height: 2},
            }}>
            <TouchableOpacity
              style={{
                borderRadius: sizes.radius,
                overflow: 'hidden',
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  borderRadius: sizes.radius,
                  width: 160,
                  height: CardHeight - 60,
                  resizeMode: 'cover',
                }}
                source={props.image}
              />

              <View style={{marginTop: spacing.l}}>
                <View style={{marginLeft: spacing.l, marginBottom: spacing.s}}>
                  <Text style={{fontSize: 16, color: '#FA4A0C'}}>
                    {props.title}
                  </Text>
                </View>
                <View style={{marginLeft: spacing.l}}>
                  <Text style={{fontSize: 14, color: '#8b8989'}}>
                    {props.price}
                  </Text>
                </View>
                <TouchableOpacity style={{marginLeft: 130}}>
                  <AddItem />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      ); })
    </ScrollView>
  );
};

export default ProductCard;
