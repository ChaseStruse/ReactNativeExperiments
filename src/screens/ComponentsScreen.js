import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Chase';
  const getStartedMessage = (
    <Text style={styles.getStartedStyle}>
      {' '}
      Getting Started With React Native{' '}
    </Text>
  );
  const myNameMessage = (
    <Text style={styles.nameMessageStyle}> My name is {name} </Text>
  );
  return (
    <View>
      {getStartedMessage}
      {myNameMessage}
    </View>
  );
};

const styles = StyleSheet.create({
  getStartedStyle: {
    fontSize: 45,
  },
  nameMessageStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
