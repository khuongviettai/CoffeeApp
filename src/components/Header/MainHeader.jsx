import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from '../../utils/Icon';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors, sizes, spacing} from '../../constants/theme';
import {useNavigation} from '@react-navigation/native';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: spacing.l,
        marginTop: insets.top,
      }}>
      <Text style={{fontSize: sizes.h3, fontWeight: 'bold'}}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon
            style={{width: 30, height: 30, marginLeft: 15}}
            icon="Notification"
          />
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: -5,
              width: 20,
              height: 20,
              borderRadius: 25,
              borderColor: colors.mainColor,
              backgroundColor: colors.mainColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: colors.white, fontSize: 14, fontWeight: '500'}}>
              1
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon style={{width: 30, height: 30, marginLeft: 15}} icon="Cart" />
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: -5,
              width: 20,
              height: 20,
              borderRadius: 25,
              borderColor: colors.mainColor,
              backgroundColor: colors.mainColor,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{color: colors.white, fontSize: 14, fontWeight: '500'}}>
              5
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
