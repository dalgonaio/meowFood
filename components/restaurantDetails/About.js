/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Image} from 'react-native';

const yelpRestaurantInfo = {
  name: 'Meow Cafe',
  image: 'https://i.pinimg.com/originals/29/ac/0f/29ac0fdf992ac6180ce795755bc5a183.jpg',
  price: '$',
  reviews: '1500',
  rating: 4.5,
  categories: [{title: 'cafe'}, {title: 'patries'}],
};

const About = (props) => {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription price={price} reviews = {reviews} rating = {rating} categories ={categories} />
    </View>
  );
};

const RestaurantImage = (props) => (
  <Image source={{uri: props.image}} style={{width: '100%', height: 180}} />
);

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: '400',
      fontSize: 15.5,
    }}
  >
    {props.categories.map((item, i) => {
      return <Text key={i}>{item.title} • </Text>;
    })}
    <Text>{props.price ? props.price : "" } • </Text>
    <Text>🎫 • </Text>
    <Text>{props.rating} ⭐ </Text>
    <Text>{props.reviews} +</Text>
  </View>
);

export default About;
