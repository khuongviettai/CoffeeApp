import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Icon from '../../utils/Icon';
import {colors, sizes, spacing} from '../../constants/theme';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <View
      style={{
        marginHorizontal: spacing.l,
        paddingTop: spacing.l,
        paddingBottom: spacing.l,
      }}>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: sizes.radius,
          borderColor: colors.mainColor,
        }}>
        <TextInput
          style={{
            backgroundColor: colors.white,
            paddingLeft: spacing.l,
            paddingRight: spacing.m,
            paddingVertical: spacing.m,
            borderRadius: sizes.radius,
            height: 54,
            flex: 1,
          }}
          placeholder="Tìm kiếm"
          value={search}
          onChangeText={setSearch}
        />
        <View style={{position: 'absolute', top: 10, right: 20, zIndex: 1}}>
          <Icon icon="Search" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default SearchInput;
