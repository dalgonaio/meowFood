/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {localRestaurants} from '../components/RestaurantItem';
import SearchBar from '../components/SearchBar';

//Yelp Developer API Key
const apikey =
  'B1iXCN9N8nmNaWtNVd6FWAWeTK-eP9sLRj4hLlxek8W1JwRTv8toIxAaJZ4Tq1v1LX5PYcwtQwnjPblLfGOmnYT4JJ-RFgLaJmcaDmJ4EslWHiolr_j3NaGmsb6VYXYx';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('New York');
  const [activeTab, setActiveTab] = useState('Delivery');

  //call to Yelp for restaurant data
  const getRestaurantsFromYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${apikey}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        {
          setRestaurantData(
          json.businesses.filter((business) => {
            const feature = activeTab.toLowerCase();
            return business.transactions.includes(feature);
          })
        );
      }
      );
  };

  //set up state with data pulled from yelp upon loading and or search bar use
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems restaurants={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
