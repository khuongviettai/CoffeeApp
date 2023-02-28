import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import icons from '../../constants/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors} from '../../constants/theme';
import {useFormik} from 'formik';
import * as Yup from 'yup';
const Login = ({windowWidth, navigation}) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .required('')
        .matches(
          /((^(0){1})(3|5|7|8|9))+([0-9]{7,})$/,
          'Số điện thoại không hợp lệ',
        ),
    }),
  });
  return (
    <View
      style={{
        width: '100%',
        height: '90%',
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: windowWidth - 60,
            height: 50,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#979797',
          }}>
          <Image source={icons.VietnamFlag} style={{width: 20, height: 15}} />
          <TextInput
            style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            onChangeText={formik.handleChange('phoneNumber')}
            onBlur={formik.handleBlur('phoneNumber')}
            value={formik.values.phoneNumber}
          />
          {formik.errors.phoneNumber && (
            <Text style={{color: 'red'}}>{formik.errors.phoneNumber}</Text>
          )}
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
            autoCapitalize="none"
          />
        </View>

        <View
          style={{
            width: windowWidth - 60,
            height: 50,
            marginTop: 30,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{color: colors.mainColor}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
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
        }}
        onPress={() => navigation.navigate('Root')}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
