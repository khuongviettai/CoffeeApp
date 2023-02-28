import React from 'react';
import {
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, spacing} from '../../../constants/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const AddressHome = () => {
  return (
    <View
      style={{
        backgroundColor: colors.bodyColor,
        height: windowHeight * 0.85,
      }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{backgroundColor: colors.white, marginVertical: 20}}>
          <View style={{marginHorizontal: spacing.m, marginTop: spacing.m}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 14,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Tên địa chỉ
            </Text>
            <View
              style={{
                height: 40,
                // borderWidth: 1,
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: '#F5F5F8',
              }}>
              <Text
                style={{
                  marginLeft: spacing.m,
                  fontSize: 15,
                  fontWeight: '500',
                }}>
                Nhà
              </Text>
            </View>
          </View>
          <View style={{marginHorizontal: spacing.m, marginTop: spacing.m}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 14,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Địa chỉ*
            </Text>
            <View
              style={{
                height: 40,
                borderWidth: 0.3,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Nhập địa chỉ"
                style={{marginLeft: spacing.m}}></TextInput>
            </View>
          </View>
          <View
            style={{marginHorizontal: spacing.m, marginVertical: spacing.m}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 14,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Số nhà, số tầng
            </Text>
            <View
              style={{
                height: 40,
                borderWidth: 0.3,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Nhập số nhà, số tầng"
                style={{marginLeft: spacing.m}}></TextInput>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: colors.white}}>
          <View style={{marginHorizontal: spacing.m, marginTop: spacing.m}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 14,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Tên người nhận
            </Text>
            <View
              style={{
                height: 40,
                borderWidth: 0.3,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Tên người nhận"
                style={{marginLeft: spacing.m}}></TextInput>
            </View>
          </View>
          <View
            style={{marginHorizontal: spacing.m, marginVertical: spacing.m}}>
            <Text
              style={{
                color: colors.gray,
                fontSize: 14,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Số điện thoại
            </Text>
            <View
              style={{
                height: 40,
                borderWidth: 0.3,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TextInput
                placeholder="Số điện thoại"
                style={{marginLeft: spacing.m}}></TextInput>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <TouchableOpacity
        style={{
          height: 50,
          width: windowWidth - spacing.m * 2,
          justifyContent: 'center',
          marginHorizontal: spacing.m,
          alignItems: 'center',
          borderRadius: 18,
          backgroundColor: colors.mainColor,
          position: 'absolute',
          bottom: 0,
        }}>
        <Text style={{color: '#F6F6F9', fontSize: 17}}>Thêm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressHome;
