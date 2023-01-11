import React from 'react';
import {View} from 'react-native';
import {colors, shadow} from '../constants/theme';
import Icon from './Icon';

const FavoriteButton = ({active, style}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.white,
          padding: 4,
          borderRadius: 20,
        },
        shadow.light,
        style,
      ]}>
      <Icon icon={active ? 'Favorite_red' : 'Favorite'} size={20} />
    </View>
  );
};

export default FavoriteButton;
