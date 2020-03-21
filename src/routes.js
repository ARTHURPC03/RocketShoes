import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MdHome, MdShoppingCart } from 'react-icons/lib/md'

import Home from './pages/Home'
import Cart from './pages/Cart'

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'rgb(4, 211, 97)',
        style: {
          backgroundColor: '#0B0A0D',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  )
}
