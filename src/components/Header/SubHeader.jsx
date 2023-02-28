import React from 'react';
import {sizes, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const SubHeader = ({subTitle}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        paddingHorizontal: spacing.l,
        marginTop: insets.top,
        marginBottom: spacing.l,
      }}>
      <Icon icon="Back2" />
      <Text style={{fontSize: sizes.h3, fontWeight: 'bold'}}>{subTitle}</Text>
      {/*<Icon icon="Cart2" />*/}
      <View style={{width: 32, height: 32}}></View>
    </View>
  );
};

export default SubHeader;
