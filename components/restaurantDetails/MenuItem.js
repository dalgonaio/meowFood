/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';

const foods = [
  {
    title: 'Cream Puff',
    description: 'Fluffy pastry with delicious fillings depending on the day',
    price: '$3.00',
    image: 'https://www.chiselandfork.com/wp-content/uploads/2020/07/chocolate-cream-puffs-4.jpg',
  },
  {
    title: 'Egg Tart',
    description: 'Pasteis de Nata',
    price: '$3.25',
    image:
      'https://gimmeyummy.com/wp-content/uploads/2019/11/Portuguese-Custard-Egg-Tart-Recipe-Past%C3%A9is-de-Nata-2048x1259.jpg?ezimgfmt=ng:webp/ngcb1',
  },
  {
    title: 'Croissant',
    description:
      'Buttery, flaky, viennoiserie pastry of Austrian origin, but mostly associated with France',
    price: '$2.50',
    image:
      'https://www.theflavorbender.com/wp-content/uploads/2020/05/French-Croissants-2522-699x1047.jpg',
  },
];

const MenuItem = () => {
  return (
    <ScrollView>
      <View style={styles.menuItemStyle}>
        {foods.map((item, i) => {
          return (
            <View key={i} >
              <TouchableOpacity style={styles.singleItem}>
                <FoodInfo food={item} />
                <FoodImage food={item} />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const FoodInfo = (props) => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <Image
    source={{
      uri: props.food.image,
    }}
    style={{
      width: '30%',
      height: 90,
    }}
  />
);

export default MenuItem;

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 20,
  },
  singleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
  },
});
