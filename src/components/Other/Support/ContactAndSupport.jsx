import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors, spacing} from '../../../constants/theme';
import Feather from 'react-native-vector-icons/Feather';
import Icon from '../../../utils/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Linking} from 'react-native';

const ContactAndSupport = () => {
  return (
    <ScrollView>
      {/*<View>*/}
      <View
        style={{
          marginVertical: 20,
          height: 165,
          marginLeft: spacing.l,
          marginRight: spacing.l,
          backgroundColor: colors.white,
          borderRadius: 10,
        }}>
        <TouchableOpacity
          style={{
            marginTop: 10,
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => Linking.openURL(`tel:0945034118`)}>
          <Feather name="phone" style={{fontSize: 20}} />
          <View>
            <Text style={{marginLeft: 12}}>Tổng đài</Text>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 10,
                marginTop: 5,
                color: colors.gray,
              }}>
              0945034118
            </Text>
          </View>

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
            marginTop: 5,
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => Linking.openURL('mailto:vtcoffee@gmail.com')}>
          <Feather name="mail" style={{fontSize: 20}} />
          <View>
            <Text style={{marginLeft: 12}}>Email</Text>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 10,
                marginTop: 5,
                color: colors.gray,
              }}>
              vtcoffee@gmail.com
            </Text>
          </View>
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
            marginTop: 5,
            flexDirection: 'row',
            height: 45,
            alignItems: 'center',
            marginLeft: spacing.m,
          }}
          onPress={() => Linking.openURL('http://vtcoffee.com/')}>
          <MaterialCommunityIcons name="web" style={{fontSize: 20}} />
          <View>
            <Text style={{marginLeft: 12}}>Website</Text>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 10,
                marginTop: 5,
                color: colors.gray,
              }}>
              vtcoffee.com
            </Text>
          </View>

          <Icon
            icon="Next"
            style={{width: 20, height: 20, position: 'absolute', right: 30}}
          />
        </TouchableOpacity>
      </View>
      {/*</View>*/}
    </ScrollView>
  );
};

export default ContactAndSupport;
