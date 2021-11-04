/* eslint-disable no-unused-vars */
import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'

const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex:1}}>
      <View style={{backgroundColor: "white", padding:15,}}>
      <HeaderTabs />
      <SearchBar />
      </View>

    </SafeAreaView>
  )
}

export default Home

