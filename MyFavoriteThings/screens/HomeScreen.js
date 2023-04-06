import React, { useState } from "react";
import { StyleSheet, Text, Button, View, Alert, TextInput } from 'react-native';
import { cards } from "../data/cards";
import CardList from "../components/CardList";

const HomeScreen = ({items}) => {

    const [text, onChangeText] = useState('');
    return (
        <View style={styles.container}>
          <CardList items={cards}/>
      </View>
    );
}



export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3D3D3D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });