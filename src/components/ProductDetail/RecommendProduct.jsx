import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';
import ProfileHeader from '../Header/ProfileHeader';

const CardWidth = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CardHeight = 220;
const RecommendProduct = ({list}) => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfileHeader title="Gợi ý" />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: colors.bodyColor,
          marginBottom: 120,
        }}>
        {list &&
          list.slice(3).map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{marginLeft: spacing.l, marginBottom: spacing.l}}
                onPress={() => {
                  navigation.navigate('ProductDetails', {product: item});
                }}>
                <View
                  style={{
                    width: CardWidth,
                    height: CardHeight,
                    backgroundColor: colors.white,
                    borderRadius: sizes.radius,
                    shadowColor: colors.black,
                    shadowRadius: 4,
                    shadowOpacity: 0.1,
                    shadowOffset: {width: 0, height: 2},
                    overflow: 'hidden',
                  }}>
                  <View
                    style={{
                      width: CardWidth,
                      height: CardHeight - 75,
                      borderTopLeftRadius: sizes.radius,
                      borderTopRightRadius: sizes.radius,
                      overflow: 'hidden',
                    }}>
                    <Image
                      style={{
                        width: CardWidth,
                        height: CardHeight - 60,
                        resizeMode: 'cover',
                      }}
                      source={{uri: item.image[0]}}
                    />
                    <View
                      style={{
                        height: 20,
                        width: 140,
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'absolute',
                        backgroundColor: colors.mainColor,
                        top: 20,
                        left: -35,
                        transform: [{rotate: '-45deg'}],
                      }}>
                      <Text
                        style={{
                          fontSize: 13,
                          fontWeight: 'bold',
                          color: colors.white,
                        }}>
                        GỢI Ý
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginTop: 6,
                      marginLeft: 20,
                      marginRight: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          marginVertical: 4,
                          fontSize: 13,
                          fontWeight: '600',
                          color: '#FA4A0C',
                        }}>
                        {item.title.substring(0, 20)}
                      </Text>
                      <Text style={{fontSize: 14, color: '#8b8989'}}>
                        {item.price.toLocaleString('vi', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </View>
    </View>
  );
};

export default RecommendProduct;
