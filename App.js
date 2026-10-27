import React, { Component } from 'react';
import { View, Text } from 'react-native';


const Welcome = (props) => {
  return (
    <View>
      <Text>Welcome to {props.code} - {props.name}</Text>
    </View>
  );
};


class ModuleInfo extends Component {
  render() {
    return (
      <View>
        <Text>These are my modules this semester:</Text>
        <Welcome code="C346" name="Mobile App Development" />
        <Welcome code="C133" name="Designing Your Life: Personal Growth II" />
        <Welcome code="C218" name="UI/UX Design for Apps" />
      </View>
    );
  }
}


export default function App() {
  return (
    <View>
      <ModuleInfo />
    </View>
  );
}
