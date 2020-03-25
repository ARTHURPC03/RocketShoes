import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'

const Stack = createStackNavigator()

export default function Routes() {
  const StackNavigatorScreenOptions = {
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {
      marginLeft: 10,
    },
    headerRightContainerStyle: {
      marginRight: 10,
    },
    headerStyle: {
      backgroundColor: '#7159c1',
    },
    headerTintColor: '#fff',
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ header: Header }}
        screenOptions={StackNavigatorScreenOptions}
        component={Home}
      />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}
