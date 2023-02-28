import React from 'react';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import OnboardingScreen from '../screens/OnboardingScreen';
import BottomTabNavigator from './BottomTabNavigator';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPassword from '../components/Account/ForgotPassword';
import AddressSave from '../components/Other/Address/AddressSave';
import AddressHome from '../components/Other/Address/AddressHome';
import CartScreen from '../screens/CartScreen';
import PersonalAccountInfo from '../components/Other/PersonalAccount/PersonalAccountInfo';
import Provision from '../components/Other/Utilities/Provision';
import PromotionDetail from '../components/Promotion/PromotionDetail';
import ContactAndSupport from '../components/Other/Support/ContactAndSupport';
import NotificationScreen from '../screens/NotificationScreen';
import Policy from '../components/Other/Utilities/Policy';
import PurchaseHistory from '../components/Order/PurchaseHistory';

const Stack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
            useNativeDriver: true,
            gestureEnabled: false,
          }}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailScreen}
          options={{
            title: null,
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            title: null,
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            title: 'Lấy lại mật khẩu',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />

        <Stack.Screen
          name="AddressSave"
          component={AddressSave}
          options={{
            headerShown: true,
            title: 'Địa chỉ',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="AddressHome"
          component={AddressHome}
          options={{
            headerShown: true,
            title: 'Thêm địa chỉ mới',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: 'Giỏ hàng',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="PersonalAccountInfo"
          component={PersonalAccountInfo}
          options={{
            title: 'Thông tin cá nhân',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="Provision"
          component={Provision}
          options={{
            title: 'Điều khoản',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
        <Stack.Screen
          name="PromotionDetail"
          component={PromotionDetail}
          options={({route}) => ({
            title: route.params.title,
            headerBackTitle: false,
            headerTitle: true,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          })}
        />
        <Stack.Screen
          name="ContactAndSupport"
          component={ContactAndSupport}
          options={{
            title: 'Liên hệ và hỗ trợ',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />

        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: 'Thông báo',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />

        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{
            title: 'Chính sách',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />

        <Stack.Screen
          name="PurchaseHistory"
          component={PurchaseHistory}
          options={{
            title: 'Lịch sử mua hàng',
            headerBackTitle: false,
            headerTitle: false,
            headerBackTitleVisible: false,
            headerTintColor: '#333',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNavigator;
