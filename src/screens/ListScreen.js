import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => { 
    const friends = [
        {name: 'Friend 1', age: 20,key: '1'},
        {name: 'Friend 2', age: 21,key: '2'},
        {name: 'Friend 3', age: 22,key: '3'},
        {name: 'Friend 4', age: 23,key: '4'},
        {name: 'Friend 5', age: 24,key: '5'},
        {name: 'Friend 6', age: 25,key: '6'},
    ]
    return (
    <FlatList 
        //horizontal                          //use this if you want the scroll to be horizontal
        showsVerticalScrollIndicator={false}  //Removes scroll bar
        data={friends}
        renderItem={({item}) => {
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}
    />
    
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 100,
        fontSize: 50
    }
});

export default ListScreen;
