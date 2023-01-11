import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createSharedElementStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileNavigator"
        component={ProfileScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileNavigator;
