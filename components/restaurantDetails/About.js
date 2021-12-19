/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, Image } from 'react-native'

const image = "https://i.pinimg.com/originals/29/ac/0f/29ac0fdf992ac6180ce795755bc5a183.jpg";
const title = "Meow Cafe"
const description = "Pastries * Coffee *  $ * 4 stars * (2000)"

const About = () => {
  return (
    <View>
      <RestaurantImage image ={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description = {description} />
    </View>
  )
}

const RestaurantImage = (props) =>(
  <Image source={{uri:props.image}} style={{width: "100%", height: 180}} />
)

const RestaurantTitle = (props) => (
  <Text style = {{
    fontSize: 29,
    fontWeight: "600",
    marginTop: 10,
    marginHorizontal:15
  }}>{props.title}</Text>
)

const RestaurantDescription = (props) => (
  <Text
  style = {{
    marginTop: 10,
    marginHorizontal: 15,
    fontWeight: "400",
    fontSize: 15.5,
  }}>{props.description}</Text>
)

export default About
