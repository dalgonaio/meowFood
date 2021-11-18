/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {localRestaurants} from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

const apikey ="B1iXCN9N8nmNaWtNVd6FWAWeTK-eP9sLRj4hLlxek8W1JwRTv8toIxAaJZ4Tq1v1LX5PYcwtQwnjPblLfGOmnYT4JJ-RFgLaJmcaDmJ4EslWHiolr_j3NaGmsb6VYXYx";

// const yelp = require('yelp-fusion');
// const client = yelp.client(apiKey);

const getRestaurantsFromYelp = () =>{
 const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=NewYorkCity"

 const apiOptions = {
   headers: {
     Authorization: `Bearer ${apikey}`,
   }}

   return fetch(yelpURL, apiOptions)
   .then((res)=>res.json())
   .then(json=>setRestaurantData(json.businesses))
 }


const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems
        restaurants = {restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
