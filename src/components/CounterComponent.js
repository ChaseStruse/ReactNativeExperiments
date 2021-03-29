import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(1);
  return (
    <View>
      <Button
        style={styles.buttonStyle}
        title="Increase"
        onPress={() => setCounter(counter + increment)}
      />
      <Button
        style={styles.buttonStyle}
        title="Decrease"
        onPress={() => setCounter(counter - increment)}
      />
      <Button
        style={styles.buttonStyle}
        title="Increase Increment"
        onPress={() => setIncrement(increment + 1)}
      />
      <Button
        style={styles.buttonStyle}
        title="Decrease Increment"
        onPress={() => setIncrement(increment - 1)}
      />
      <Text style={styles.textStyle}>Current Count: {counter}</Text>
      <Text style={styles.textStyle}>Current Increment: {increment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    fontSize: 20,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default CounterComponent;
