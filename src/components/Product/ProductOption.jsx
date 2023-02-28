import React, {useEffect, useState} from 'react';
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';
import instance from '../../instance/instance';
import CheckBox from '@react-native-community/checkbox';
import ProductDetailButton from '../ProductDetail/ProductDetailButton';

const ProductOption = ({
  snapPoints,
  bottomSheetRef,
  handleClosePress,
  productID,
}) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (productID) {
      instance
        .get(`/api/products/${productID}`)
        .then(({data}) => {
          setProduct(data);
        })
        .catch(error => console.log(error));
    } else {
      return setProduct([]);
    }
  }, [productID]);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <BottomSheet
      index={-1}
      backgroundStyle={{backgroundColor: colors.bodyColor}}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      handleComponent={null}
      enablePanDownToClose={true}>
      <BottomSheetView>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            backgroundColor: colors.white,
            paddingHorizontal: 30,
          }}>
          <View style={{width: 30, height: 30}}></View>
          <Text>{product.title}</Text>
          <TouchableOpacity onPress={handleClosePress}>
            <Icon
              icon="Close"
              style={{
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </BottomSheetView>

      <BottomSheetScrollView>
        <View
          style={{
            backgroundColor: colors.white,
            marginTop: spacing.m,
            marginBottom: 120,
          }}>
          <View>
            {product.size === 0 ? (
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

            {product.size &&
              product.size.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginLeft: spacing.l,
                      marginVertical: spacing.s,
                    }}>
                    <TouchableOpacity
                      style={{
                        height: 22,
                        width: 22,
                        borderRadius: 12,
                        borderWidth: 2,
                        borderColor: colors.lightGray,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => setSelectedOption(index)}>
                      {selectedOption === index && (
                        <View
                          style={{
                            height: 12,
                            width: 12,
                            borderRadius: 6,
                            backgroundColor: colors.mainColor,
                          }}
                        />
                      )}
                    </TouchableOpacity>
                    <Text style={{marginLeft: 8}}>{item}</Text>
                  </View>
                );
              })}

            {/*{product.size &&*/}
            {/*  product.size.map((item, index) => {*/}
            {/*    return (*/}
            {/*      <View*/}
            {/*        key={index}*/}
            {/*        style={{*/}
            {/*          marginLeft: spacing.l,*/}
            {/*          marginVertical: spacing.l,*/}
            {/*        }}>*/}
            {/*        <Text>{item}</Text>*/}
            {/*      </View>*/}
            {/*    );*/}
            {/*  })}*/}
          </View>
          <View
            style={{
              height: spacing.l,
              width: '100%',
              backgroundColor: colors.bodyColor,
            }}></View>
          <View>
            {product.topping === 0 ? (
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
        </View>
      </BottomSheetScrollView>
      <ProductDetailButton />
    </BottomSheet>
  );
};

export default ProductOption;
