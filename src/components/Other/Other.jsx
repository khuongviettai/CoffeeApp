import React from 'react';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import ProfileHeader from '../Header/ProfileHeader';
import {colors, spacing} from '../../constants/theme';
import Icon from '../../utils/Icon';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const windowWidth = Dimensions.get('window').width;
const Other = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <ProfileHeader title="Tiện ích" />
      <View
        style={{
          width: windowWidth - (spacing.l + spacing.l),
          marginHorizontal: spacing.l,
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 80,

            backgroundColor: colors.white,
            borderRadius: 10,
            paddingLeft: spacing.m,
            paddingTop: spacing.m,
          }}
          onPress={() => navigation.navigate('PurchaseHistory')}>
          <Octicons name="history" style={{fontSize: 20}} />
          <Text
            style={{fontSize: 15, fontWeight: 'bold', marginTop: spacing.s}}>
            Lịch sử mua hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 80,
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingLeft: spacing.m,
            paddingTop: spacing.m,
          }}>
          <MaterialCommunityIcons name="list-status" style={{fontSize: 20}} />
          <Text
            style={{fontSize: 15, fontWeight: 'bold', marginTop: spacing.s}}>
            Đơn hàng
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 80,
            marginVertical: spacing.s,
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingLeft: spacing.m,
            paddingTop: spacing.m,
          }}
          onPress={() => navigation.navigate('Provision')}>
          <Feather name="file-text" style={{fontSize: 20}} />
          <Text
            style={{fontSize: 15, fontWeight: 'bold', marginTop: spacing.s}}>
            Điều khoản
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '48%',
            height: 80,
            marginVertical: spacing.s,
            backgroundColor: colors.white,
            borderRadius: 10,
            paddingLeft: spacing.m,
            paddingTop: spacing.m,
          }}
          onPress={() => navigation.navigate('Policy')}>
          <MaterialIcons name="policy" style={{fontSize: 20}} />
          <Text
            style={{fontSize: 15, fontWeight: 'bold', marginTop: spacing.s}}>
            Chính sách
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ProfileHeader title="Hỗ trợ" />
        <View
          style={{
            width: windowWidth - (spacing.l + spacing.l),
            height: 50,
            backgroundColor: colors.white,
            marginHorizontal: spacing.l,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 45,
              alignItems: 'center',
              marginLeft: spacing.m,
            }}
            onPress={() => navigation.navigate('ContactAndSupport')}>
            <Feather name="message-square" style={{fontSize: 20}} />
            <Text style={{marginLeft: 12}}>Liên hệ và hỗ trợ</Text>
            <Icon
              icon="Next"
              style={{width: 20, height: 20, position: 'absolute', right: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ProfileHeader title="Tài khoản" />

      <View
        style={{
          height: 140,
          marginLeft: spacing.l,
          marginRight: spacing.l,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => navigation.navigate('PersonalAccountInfo')}>
          <Feather name="user" style={{fontSize: 20}} />
          <Text style={{marginLeft: 12}}>Thông tin cá nhân</Text>
          <Icon
            icon="Next"
            style={{width: 20, height: 20, position: 'absolute', right: 30}}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '85%',
            marginLeft: spacing.m,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => navigation.navigate('AddressSave')}>
          <Feather name="bookmark" style={{fontSize: 20}} />
          <Text style={{marginLeft: 12}}>Địa chỉ đã lưu</Text>
          <Icon
            icon="Next"
            style={{width: 20, height: 20, position: 'absolute', right: 30}}
          />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '85%',
            marginLeft: spacing.m,
            borderBottomWidth: 1,
            borderColor: colors.lightGray,
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => navigation.navigate('Login')}>
          <MaterialCommunityIcons name="login" style={{fontSize: 20}} />
          <Text style={{marginLeft: 12}}>Đăng nhập</Text>
          <Icon
            icon="Next"
            style={{width: 20, height: 20, position: 'absolute', right: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Other;
