import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import ProductScreen from '../screens/ProductScreen';

const Stack = createSharedElementStackNavigator();
const ProductNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          headerShown: false,
          useNativeDriver: true,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProductNavigator;
