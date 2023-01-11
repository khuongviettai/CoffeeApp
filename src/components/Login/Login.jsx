import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import icons from '../../constants/icons';
const Login = ({windowWidth}) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          borderBottomWidth: 1,
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#979797',
          marginTop: -100,
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
          marginTop: 20,
          borderColor: '#979797',
        }}>
        <Image source={icons.Lock} style={{width: 20, height: 20}} />
        <TextInput
          style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
          placeholder="Mật khẩu"
          autoCapitalize={false}
        />
      </View>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          marginTop: 30,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{position: 'absolute', right: 0}}>
          <Text style={{color: '#FA4A0C'}}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: windowWidth - 60,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FA4A0C',
          borderRadius: 30,
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
