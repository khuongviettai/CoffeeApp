import React from 'react';
import {Button, Text, View} from 'react-native';
import {spacing} from '../../constants/theme';

const SectionHeader = ({title, onPress, buttonTitle = 'Button'}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing.l,
        marginTop: spacing.l,
        marginBottom: 10,
      }}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
      <Button title={buttonTitle} />
    </View>
  );
};

export default SectionHeader;
