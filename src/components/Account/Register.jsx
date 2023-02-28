import React from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import icons from '../../constants/icons';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register = ({windowWidth}) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .required('')
        .min(5, 'Họ và tên phải nhiều hơn 5 ký tự'),
      phoneNumber: Yup.string()
        .required('')
        .matches(
          /((^(0){1})(3|5|7|8|9))+([0-9]{7,})$/,
          'Số điện thoại không hợp lệ',
        ),

      password: Yup.string()
        .required('')
        .matches(/^.{5,}$/, 'Mật khẩu cần ít nhất 5 ký tự'),
      confirmPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp'),
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
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardOpeningTime={999999999999999999}>
        <View
          style={{
            width: windowWidth - 60,
            height: 50,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#979797',
          }}>
          <Image source={icons.Profile} style={{width: 20, height: 30}} />
          <TextInput
            style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
            placeholder="Họ và tên"
            name="fullName"
            onChangeText={formik.handleChange('fullName')}
            onBlur={formik.handleBlur('fullName')}
            value={formik.values.fullName}
          />
          {formik.errors.fullName && (
            <Text style={{color: 'red'}}>{formik.errors.fullName}</Text>
          )}
        </View>
        <View
          style={{
            width: windowWidth - 60,
            height: 50,
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#979797',
            marginTop: 20,
          }}>
          <Image source={icons.VietnamFlag} style={{width: 20, height: 15}} />
          <TextInput
            style={{height: '100%', flex: 1, fontSize: 15, marginLeft: 10}}
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            name="phoneNumber"
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
            name="password"
            onChangeText={formik.handleChange('password')}
            onBlur={formik.handleBlur('password')}
            value={formik.values.password}
          />
          {formik.errors.password && (
            <Text style={{color: 'red'}}>{formik.errors.password}</Text>
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
            placeholder="Nhập lại mật khẩu"
            autoCapitalize="none"
            name="confirmPassword"
            onChangeText={formik.handleChange('confirmPassword')}
            onBlur={formik.handleBlur('confirmPassword')}
            value={formik.values.confirmPassword}
          />
          {formik.errors.confirmPassword && (
            <Text style={{color: 'red'}}>{formik.errors.confirmPassword}</Text>
          )}
        </View>
      </KeyboardAwareScrollView>
      <View
        style={{
          width: windowWidth - 60,
          height: 50,
          // marginTop: 30,
          flexDirection: 'row',
        }}></View>
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
        onPress={formik.handleSubmit}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
