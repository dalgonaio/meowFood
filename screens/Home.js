/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {localRestaurants} from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

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
