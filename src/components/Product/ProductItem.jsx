import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import AddItem from '../../utils/AddItem';
import {useNavigation} from '@react-navigation/native';

const CardHeight = 220;
const ProductItem = ({list, handleSnapPress}) => {
  const navigation = useNavigation();
  return (
    <View>
      {list?.map((item, index) => {
        return (
          <View
            key={index}
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
                  marginRight: 0,
                }}>
                <TouchableOpacity
                  style={{
                    borderRadius: sizes.radius,
                    overflow: 'hidden',
                    flexDirection: 'row',
                  }}
                  onPress={() => {
                    navigation.navigate('ProductDetails', {product: item});
                  }}>
                  <Image
                    style={{
                      borderRadius: sizes.radius,
                      width: 160,
                      height: CardHeight - 60,
                      resizeMode: 'cover',
                    }}
                    source={{uri: item.image[0]}}
                  />

                  <View style={{marginTop: spacing.l}}>
                    <View
                      style={{
                        marginLeft: spacing.l,
                        marginBottom: spacing.s,
                        width: '85%',
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: colors.mainColor,
                          flexWrap: 'wrap',
                        }}>
                        {item.title}
                      </Text>
                    </View>
                    <View style={{marginLeft: spacing.l}}>
                      <Text style={{fontSize: 14, color: '#8b8989'}}>
                        {item.price.toLocaleString('vi', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      right: 20,
                      bottom: 20,
                    }}
                    onPress={() => {
                      handleSnapPress(0, item);
                    }}>
                    <AddItem />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ProductItem;
