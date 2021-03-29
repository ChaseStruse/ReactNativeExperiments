import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorComponent from '../components/ColorComponent';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  console.log(red);
  return (
    <View>
      <ColorCounter
        name="Red"
        onIncrease={() => setRed(red + 10)}
        onDecrease={() => setRed(red - 10)}
      />
      <ColorCounter
        onIncrease={() => setGreen(green + 10)}
        onDecrease={() => setGreen(green - 10)}
        name="Green"
      />
      <ColorCounter
        name="Blue"
        onIncrease={() => setBlue(blue + 10)}
        onDecrease={() => setBlue(blue - 10)}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
