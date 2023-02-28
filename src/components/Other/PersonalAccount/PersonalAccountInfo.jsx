import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import user from '../../../../assets/Personal/user.png';
import {colors, spacing} from '../../../constants/theme';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const PersonalAccountInfo = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View>
      <View
        style={{
          width: windowWidth,
          height: windowHeight,
          marginTop: spacing.l,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 1,
          }}>
          <Image
            source={user}
            style={{width: '100%', height: '100%', borderRadius: 200}}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: colors.white,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              right: 0,
              borderRadius: 40,
              borderWidth: 0.5,
              borderColor: colors.mainColor,
            }}>
            <Feather name="camera" style={{fontSize: 30}} />
          </TouchableOpacity>
        </View>
        <KeyboardAwareScrollView>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: windowWidth - 60,
                height: 45,
                marginTop: 20,
                borderWidth: 0.5,
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <TextInput
                style={{fontSize: 15, marginHorizontal: spacing.m}}
                placeholder="Họ và tên"
                placeholderTextColor={colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: windowWidth - 60,
                height: 45,
                marginTop: 20,
                borderWidth: 0.5,
                borderRadius: 10,
                justifyContent: 'center',
              }}
              onPress={() => setOpen(true)}>
              <Text
                style={{
                  marginHorizontal: spacing.m,
                  fontSize: 15,
                  color: colors.gray,
                }}>
                Ngày sinh 01/01/2022
              </Text>
              <DatePicker
                modal
                open={open}
                date={date}
                onDateChange={setDate}
                mode="date"
                confirmText="Xác nhận"
                cancelText="Huỷ"
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={1}
              style={{
                width: windowWidth - 60,
                height: 45,
                marginTop: 20,
                borderWidth: 0.5,
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <TextInput
                style={{fontSize: 15, marginHorizontal: spacing.m}}
                placeholder="Email"
                placeholderTextColor={colors.gray}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

export default PersonalAccountInfo;
