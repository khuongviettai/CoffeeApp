import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import FavoriteButton from '../../utils/FavoriteButton';

const CardWidth = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CardHeight = 220;
const PopularList = ({list}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
      {list.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={{marginLeft: spacing.l, marginBottom: spacing.l}}>
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
                  source={item.image}
                />
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
                <FavoriteButton />
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PopularList;
