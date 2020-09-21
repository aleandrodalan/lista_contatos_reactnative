import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, NativeModules } from 'react-native';

import Header from './src/components/Header/Header';

export default class App extends React.Component {
  renderList() {
    const nomes = [
      'Eddie Van Halen',
      'Jimi Hendrix',
      'Chimbinha',
      'Steve Vai'
    ];

    const textElements = nomes.map((name) => {
      return <Text key={name}>{name}</Text>
    });

    return textElements;
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