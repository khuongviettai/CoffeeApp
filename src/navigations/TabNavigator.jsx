import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Animated} from 'react-native';
import Icon from '../utils/Icon';
import {colors, sizes} from '../constants/theme';
import PromoScreen from '../screens/PromoScreen';
import HomeNavigator from './HomeNavigator';
import ProductNavigator from './ProductNavigator';
import SearchNavigator from './SearchNavigator';
import ProfileNavigator from './ProfileNavigator';
import LoginScreen from '../screens/LoginScreen';

const tabs = [
  {
    name: 'Home',
    screen: HomeNavigator,
  },
  {
    name: 'Coffee',
    screen: ProductNavigator,
  },
  {
    name: 'Search',
    screen: SearchNavigator,
  },
  {
    name: 'Gift',
    screen: PromoScreen,
  },
  {
    name: 'Profile',
    screen: LoginScreen,
  },
];
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}>
        {tabs.map(({name, screen}, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({focused}) => {
                  return (
                    <Icon
                      icon={name}
                      size={40}
                      style={{
                        tintColor: focused ? colors.mainColor : colors.gray,
                      }}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
