import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Wrapper, Container, Logo } from './styles'

const Stack = createStackNavigator()

function Header() {
  return (
    <Wrapper>
      <Stack.Screen
        name="Header"
        component={Header}
        options={{
          headerTitle: <Logo style={{ width: 50, height: 50 }} />,
        }}
      />
      <Container />
    </Wrapper>
  )
}
export default Header
