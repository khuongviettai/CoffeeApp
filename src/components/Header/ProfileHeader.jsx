import React from 'react';
import {Text, View} from 'react-native';
import {spacing} from '../../constants/theme';

const ProfileHeader = ({title}) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginHorizontal: spacing.l,
          marginTop: spacing.l,
          marginBottom: 10,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default ProfileHeader;
