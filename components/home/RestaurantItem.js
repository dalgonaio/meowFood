/* eslint-disable no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

 export const localRestaurants = [
  {
    name: `Please Don't Tell`,
    image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/Jgv9AW1OubREYQAgQErUcg/o.jpg',
    categories: ['speakeasy', 'louge'],
    price: '$$$',
    reviews: 100,
    rating: 4.0,
  },
  {
    name: "Angel's Share",
    image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/XSPtVjTrKLhhwRNPFaIpIQ/o.jpg',
    categories: ['speakeasy', 'louge'],
    price: '$$$',
    reviews: 100,
    rating: 4.5,
  },
  {
    name: 'Death & Co',
    image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/NUxY-ioEFJLKhV1wmMsCIw/o.jpg',
    categories: ['speakeasy', 'lounge'],
    price: '$$$',
    reviews: 100,
    rating: 4.0,
  },
  {
    name: 'Raines Law Room',
    image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/1MDwROZhGa1Hdsz7qzQrsQ/o.jpg',
    categories: ['speakeasy', 'bar'],
    price: '$$$',
    reviews: 100,
    rating: 4.5,
  },
  {
    name: 'Attaboy',
    image_url: 'https://s3-media0.fl.yelpcdn.com/bphoto/Ju8IyOetepdDICo_688grQ/o.jpg',
    categories: ['speakeasy', 'bar'],
    price: '$$',
    reviews: 100,
    rating: 4.0,
  },
];

const RestaurantItems = (props) => {

  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>

      {props.restaurants.map((restaurant, idx) => (
      <View key = {idx} style={styles.container} >
      <RestaurantImage img = {restaurant.image_url} />
      <RestaurantInfo
      name = {restaurant.name}
      rating = {restaurant.rating}
      />
      </View>
  ))
    }

    </TouchableOpacity>
  );
};

const RestaurantImage = (props) => (
  <>
    <Image
      source={{
        uri: props.img,
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{position: 'absolute', right: 25, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.info}>
    <View>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'gray'}}>60-75 min</Text>
    </View>
    <View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
      >
        <Text>{props.rating}</Text>
      </View>
    </View>
  </View>
);
export default RestaurantItems;

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    marginTop: 10,
    padding: 15,
    backgroundColor: 'white',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
