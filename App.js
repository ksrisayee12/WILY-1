import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Screens/Search'
import BookTransaction from './Screens/BookTransaction'

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
var AppNavigator = createSwitchNavigator({
  Search: Search,
  BookTransaction: BookTransaction,
});

const TabNavigator = createBottomTabNavigator({
Transaction: { screen: BookTransaction },
Search: { screen: Search }
});

const AppContainer = createAppContainer(TabNavigator);