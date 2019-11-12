import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/header/Header'
import LandingPage from './components/landingPage/LandingPage'

export default function App() {
  return (
    <View>
      <Header />
      <LandingPage />
    </View>
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
