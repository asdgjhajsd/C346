import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Boat(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5
          name="ship"
          size={20}
          color="gray"
          style={styles.icon}
        />
        <Text style={styles.name}>{props.name}</Text>
      </View>

      <Text style={styles.description}>
        {props.description}
      </Text>

      <Image
        source={props.picture}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  icon: {
    marginRight: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#666',
  },

  description: {
    fontSize: 14,
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});