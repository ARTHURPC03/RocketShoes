import React from 'react'
import { Button } from 'react-native'

import { Container, MainText } from './styles'

export default function Cart({ navigation }) {
  return (
    <Container>
      <MainText>Carrinho</MainText>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </Container>
  )
}
