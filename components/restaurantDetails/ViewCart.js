/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const ViewCart = () => {
  return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: 'relative',
          }}
        >
          <Text style={{color: 'white', fontSize: 20}}>View Cart</Text>
        </TouchableOpacity>
      </View>
  );
};

export default ViewCart;
