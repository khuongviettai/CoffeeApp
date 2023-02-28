import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../constants/icons';

const windowWidth = Dimensions.get('window').width;
const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 23, fontWeight: 'bold'}}>Lấy lại mật khẩu</Text>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
          marginTop: 50,
        }}>
        <Image source={icons.VietnamFlag} style={{width: 20, height: 15}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Số điện thoại"
          keyboardType="phone-pad"
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
          marginTop: 50,
        }}>
        {/*<Image source={icons.VietnamFlag} style={{width: 20, height: 15}} />*/}
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Code"
        />
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: windowWidth - 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA4A0C',
          borderRadius: 30,
          marginTop: 30,
        }}
        onPress={() => navigation.navigate('Root')}>
        <Text style={{color: '#F6F6F9', fontSize: 17, fontWeight: '400'}}>
          Lấy lại mật khẩu
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ForgotPassword;
