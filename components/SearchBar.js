import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        query={{key: 'AIzaSyBIMe_FSDfPbsRqV2XUpWoolz6JyWjy2JA'}}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          props.cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: 'row',
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 10,
              alignItems: 'center',
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{
                marginRight: 6,
              }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
});
