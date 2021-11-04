import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

//need to add additional categories and change fast food png
const items = [
  {
    image: require('../assets/images/ShoppingBag2.png'),
    text: 'Pick up'
  },
  {
    image: require('../assets/images/drinks.png'),
    text: 'Soft Drinks'
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Bakery'
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Fast Food'
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Deals'
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Coffe & Tea'
  }
];

const Categories = () => {
  return (
    <View>
      <Text>hi</Text>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})
