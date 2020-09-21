import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

import axios from 'axios';

import Header from './src/components/Header/Header';

export default class App extends React.Component {
  renderList() {
//    const textElements = nomes.map((name) => {
//      return <Text key={name}>{name}</Text>
//    });

    axios
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => { 
        const { results } = response.data
        const { names } = results.map(people => people.name.first)
        console.log(names);
      });
  }
  
  render() {
    return (
      <View>
        <Header title={'Pessoas'} />
        { this.renderList() }
      </View>
    );
  }
}