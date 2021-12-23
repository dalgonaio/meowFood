/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableWithoutFeedbackBase } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/restaurantDetails/About';
import MenuItem from '../components/restaurantDetails/MenuItem';

const RestaurantDetails = () => {
  return (
    <View>
      <About />
      <Divider width = {1.8} style = {{marginVertical:20}} />
      <MenuItem />
    </View>
  )
}

export default RestaurantDetails