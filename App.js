import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Dimensions, Platform } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function App() {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Window Dimensions {Platform.OS}</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text>{key} : {value}</Text>
      ))}
      <Text style={styles.header}>Screen Dimensions {Platform.OS}</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text>{key} - {value}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    marginVertical: 10, 
  },
 
});
