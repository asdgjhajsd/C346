import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";


const Movie = ({title, year,icon_name,poster})=> {
 return (
  <View>
    <Text>
      <Image source = {poster} style={{width:400, height:500}}/>
        {title} {year}
    </Text>
      <FontAwesome6 name={icon_name} size={20} color="#B23B23" />
  </View>
 );};

const AllMovies = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require('./img/doctor-sleep.jpg')} />
        <Movie title="The Midway" year="2021" icon_name="parachute-box" poster={require('./img/midway.jpg')} />
      </View>
    </ScrollView>
  );
};

export default AllMovies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});