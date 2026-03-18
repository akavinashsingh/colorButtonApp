import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#3498db');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Change Color" onPress={changeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});