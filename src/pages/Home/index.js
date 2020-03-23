import React from 'react'
import { Button } from 'react-native'

import { Container, MainText } from './styles'

export default function Home({ navigation }) {
  return (
    <Container>
      <MainText>Home</MainText>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
    </Container>
  )
}
