import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ imageName, imageDescription, imageSource }) => {
  console.log(imageSource);
  return (
    <View style={styles.viewStyle}>
      <Image source={imageSource} />
      <Text>{imageName}</Text>
      <Text>{imageDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginVertical: 20,
  },
});

export default ImageDetail;
