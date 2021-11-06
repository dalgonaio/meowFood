import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, ImageStore} from 'react-native';

//change coffee and tea image

const items = [
  {
    image: require('../assets/images/ShoppingBag2.png'),
    text: 'Pick up',
  },
  {
    image: require('../assets/images/drinks.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Bakery',
  },
  {
    image: require('../assets/images/fastfood.png'),
    text: 'Fast Food',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/bakery.png'),
    text: 'Coffe & Tea',
  },
];

const Categories = () => {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle = {styles.content}
      >
        {items.map((item, idx) => {
          return (
            <View style={{alignItems: 'center', marginRight: 30, marginLeft: 30}} key={idx}>
              <Image
                source={item.image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: 'contain',
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '900',
                }}
              >
                {item.text}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  // content:{
  // flex:1,
  // flexDirection: "row",
  // justifyContent:"space-between",
  // marginLeft:30,
  // marginRight:30,
  // }
});
