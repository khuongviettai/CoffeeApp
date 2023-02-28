import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderLogin = ({loginState, setLoginState, LOGIN, REGISTER}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: '100%', width: '100%'}}>
        <View
          style={{
            // flex: 1,
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 30,
          }}>
          <Text style={{fontSize: 40, fontWeight: '500'}}>V&T Coffee</Text>
          <View
            style={{
              height: 50,
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setLoginState(LOGIN);
              }}
              disabled={loginState === LOGIN ? true : false}>
              <Text style={{fontSize: 20}}>Đăng nhập</Text>
              {loginState === LOGIN ? (
                <View
                  style={{
                    height: 3,
                    width: '75%',
                    backgroundColor: '#FA4A0C',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: '100%',
                width: '50%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setLoginState(REGISTER);
              }}
              disabled={loginState === REGISTER ? true : false}>
              <Text style={{fontSize: 20}}>Đăng ký</Text>
              {loginState === REGISTER ? (
                <View
                  style={{
                    height: 3,
                    width: '75%',
                    backgroundColor: '#FA4A0C',
                    position: 'absolute',
                    bottom: 0,
                  }}
                />
              ) : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderLogin;
