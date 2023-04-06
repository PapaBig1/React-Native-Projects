import React from "react";
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Articles from "../components/Articles";
import articles from "../data/articles";

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.articleImage}
                source={require('../assets/Nile.png')}
            />
            <Text style={styles.title}>Welcome to Nile®! Here we have all sorts of products ranging from Iphones, to even beauty products! What are you waiting for? tab the button below to get started!</Text>
            <Button
                    onPress={() => { navigation.navigate("Products") }}
                    title='Shop Products!'
                    color="#4800FF"
                    accessibilityLabel='Learn more about this button'
                />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        padding: 10,
        color: "#000",
        marginBottom: 20
    },
    articleImage: {
        width: 350,
        height: 200,
        resizeMode: 'stretch',
        borderRadius: 5,
        marginBottom: 20
    },
  });
  