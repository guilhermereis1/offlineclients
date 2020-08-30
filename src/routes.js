import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Clients from './pages/Clients';
import Home from './pages/Home';
import RegisterClient from './pages/RegisterClient';

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#CB6120',
        },
        headerTintColor: '#FFF',
      }}>
      <Stack.Screen name="Clients" component={Clients} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterClient" component={RegisterClient} />
    </Stack.Navigator>
  );
}
