import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView } from 'react-native';

export default function App() {
  console.log("App executed");

  const handlePress = () => console.log("Text Clicked");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native.</Text>
      <Image source={require('./assets/icon.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
