import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title="Click me" 
        onPress={() => 
          // (only IOS at the moment)
          // Alert.prompt("My title", "My message", text => console.log(text))
          Alert.alert("My title", "My message", [
          {text: "Yes", onPress: () => console.log("Yes")},
          {text: "No", onPress: () => console.log("No")}
        ])}/>
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
