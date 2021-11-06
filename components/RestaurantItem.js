import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItem = () => {
  return (
    <View style={styles.container}>
      <RestaurantImage />
      {/* Restaurant Info */}
    </View>
  );
};

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: 'https://www.google.com/maps/uv?pb=!1s0x89c259a9a94054ed%3A0xccbfde5942dbc6e3!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPU1-yK_Y8eJv7QnSjnzMiPm_LO2HWIt3v89BuV%3Dw213-h160-k-no!5sserendipity%20nyc%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPU1-yK_Y8eJv7QnSjnzMiPm_LO2HWIt3v89BuV&hl=en&sa=X&ved=2ahUKEwikwsSR0IL0AhXtlOAKHawhB0cQoip6BAheEAM',
      }}
      style={{
        width: '100%',
        height: 180,
      }}
    />
    <TouchableOpacity style={{position:'absolute', right:25, top:20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

export default RestaurantItem;

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
  },

});
