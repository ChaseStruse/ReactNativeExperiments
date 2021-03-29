import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail"

const ImageScreen = () => { 
    return(
        <View>
            <ImageDetail imageName="Test image name 1" imageDescription="Test Description 1" imageSource={require("../../assets/images/beach.jpg")}/>
            <ImageDetail imageName="Test image name 2" imageDescription="Test Description 2" imageSource={require("../../assets/images/forest.jpg")}/>
            <ImageDetail imageName="Test image name 3" imageDescription="Test Description 3" imageSource={require("../../assets/images/mountain.jpg")}/>
            <ImageDetail imageName="Test image name 4" imageDescription="Test Description 4" imageSource={require("../../assets/images/beach.jpg")}/>
        </View>
    )
} 

const styles = StyleSheet.create({

});

export default ImageScreen;