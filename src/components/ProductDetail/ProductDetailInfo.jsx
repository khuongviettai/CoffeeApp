import React from 'react';
import {Text, View} from 'react-native';
import {colors, spacing} from '../../constants/theme';
import CheckBox from '@react-native-community/checkbox';
import RadioButton from '../../utils/RadioButton';

const ProductDetailInfo = ({route}) => {
  const {product} = route.params;

  return (
    <View
      style={{
        backgroundColor: colors.white,
        marginTop: spacing.m,
      }}>
      <View>
        {product.size.length > 0 ? (
          <View style={{marginLeft: spacing.l, marginTop: spacing.m}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Size
            </Text>
            <Text style={{fontSize: 14, marginTop: 2, color: colors.gray}}>
              Chọn 1 loại size
            </Text>
          </View>
        ) : null}
        <RadioButton options={product.size} />

        {/*{product.size.map((item, index) => {*/}
        {/*  return (*/}
        {/*    <View*/}
        {/*      key={index}*/}
        {/*      style={{*/}
        {/*        marginLeft: spacing.l,*/}
        {/*        marginVertical: spacing.l,*/}
        {/*      }}>*/}
        {/*      <Text>{item}</Text>*/}
        {/*    </View>*/}
        {/*  );*/}
        {/*})}*/}
      </View>
      <View
        style={{
          height: spacing.l,
          width: '100%',
          backgroundColor: colors.bodyColor,
        }}></View>
      <View>
        {product.topping.length > 0 ? (
          <View style={{marginLeft: spacing.l, marginTop: spacing.m}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Topping
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginTop: 3,
                color: colors.gray,
                marginBottom: spacing.m,
              }}>
              Chọn topping
            </Text>
          </View>
        ) : null}
        {product.topping &&
          product.topping.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  marginLeft: spacing.l,
                  marginVertical: spacing.s,
                }}>
                <View key={index} style={{flexDirection: 'row'}}>
                  <CheckBox
                    style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
                    boxType="square"
                    onTintColor="#FA4A0C"
                    onCheckColor="#fff"
                    onFillColor="#FA4A0C"
                    onAnimationType="bounce"
                    offAnimationType="bounce"
                    animationDuration={0.2}
                  />
                  <Text style={{marginLeft: spacing.s}}>{item}</Text>
                </View>
              </View>
            );
          })}
      </View>
      {/*<View*/}
      {/*  style={{*/}
      {/*    height: spacing.l,*/}
      {/*    width: '100%',*/}
      {/*    backgroundColor: colors.mainColor,*/}
      {/*  }}></View>*/}
      <View>
        <View
          style={{
            marginLeft: spacing.l,
            marginTop: spacing.s,
            marginBottom: spacing.l,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Mô tả
          </Text>
          <Text
            style={{
              lineHeight: 20,
              marginRight: spacing.m,
              color: colors.black,
              marginTop: spacing.m,
            }}>
            {product.description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductDetailInfo;
