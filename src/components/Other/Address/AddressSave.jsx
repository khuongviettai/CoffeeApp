import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../../constants/theme';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

const AddressSave = () => {
  const navigator = useNavigation();
  return (
    <View style={{backgroundColor: colors.white}}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 50,
          marginHorizontal: 20,
        }}
        onPress={() => navigator.navigate('AddressHome')}>
        <Octicons name="plus" style={{fontSize: 25}} />
        <Text style={{marginLeft: 20, fontSize: 14, fontWeight: '500'}}>
          Thêm địa chỉ mới
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressSave;
