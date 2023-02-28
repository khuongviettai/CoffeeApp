import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import ProductNavigator from './ProductNavigator';
import SearchScreen from '../screens/SearchScreen';
import PromotionScreen from '../screens/PromotionScreen';
import OtherScreen from '../screens/OtherScreen';
import {Text, View} from 'react-native';
import Icon from '../utils/Icon';
import {colors} from '../constants/theme';

const tabs = [
  {
    title: 'Home',
    name: 'Home',
    screen: HomeNavigator,
  },
  {
    title: 'Sản phẩm',
    name: 'Coffee',
    screen: ProductNavigator,
  },
  {
    title: 'Tìm kiếm',
    name: 'Search',
    screen: SearchScreen,
  },
  {
    title: 'Ưu đãi',
    name: 'Gift',
    screen: PromotionScreen,
    tabBarBadge: 4,
  },
  {
    title: 'Khác',
    name: 'Menu',
    screen: OtherScreen,
  },
];

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen, title, tabBarBadge}, index) => {
          return (
            <Tab.Screen
              key={index}
              name={name}
              component={screen}
              options={{
                tabBarBadge: tabBarBadge,
                tabBarIcon: ({focused}) => {
                  return (
                    <View
                      style={{alignItems: 'center', justifyContent: 'center'}}>
                      <Icon
                        icon={name}
                        size={40}
                        style={{
                          tintColor: focused ? colors.mainColor : colors.gray,
                        }}
                      />
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 12,
                          marginTop: -2,
                          color: focused ? colors.mainColor : colors.gray,
                        }}>
                        {title}
                      </Text>
                    </View>
                  );
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default BottomTabNavigator;
