import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Home Screen!</Text>
      <Button
        title="Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button title="List Demo" onPress={() => navigation.navigate('List')} />
      <Button title="Image Demo" onPress={() => navigation.navigate('Image')} />
      <Button
        title="Counter Demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button title="Color Demo" onPress={() => navigation.navigate('Color')} />
      <Button
        title="Custom Color"
        onPress={() => navigation.navigate('CustomColor')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
