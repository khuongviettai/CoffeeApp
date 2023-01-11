import React from 'react';
import {View, Text} from 'react-native';
import {sizes, spacing} from '../../constants/theme';

const TitleHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={{paddingHorizontal: spacing.l, paddingVertical: spacing.l}}>
      <Text style={{fontSize: sizes.title, fontWeight: 'bold'}}>
        {mainTitle}
      </Text>
      <Text style={{fontSize: sizes.title}}>{secondTitle}</Text>
    </View>
  );
};

export default TitleHeader;
