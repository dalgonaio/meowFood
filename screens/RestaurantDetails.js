/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, TouchableWithoutFeedbackBase } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import About from '../components/restaurantDetails/About';
import MenuItem from '../components/restaurantDetails/MenuItem';
import ViewCart from '../components/restaurantDetails/ViewCart';

const RestaurantDetails = ({ route, navigation }) => {

  return (
    <View>
      <About route = {route} />
      <Divider width = {1.8} style = {{marginVertical:20}} />
      <MenuItem />
      <ViewCart navigation={navigation} restaurantName = {route.params.name} />
    </View>
  )
}

export default RestaurantDetails
