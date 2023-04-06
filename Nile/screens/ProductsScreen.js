import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Articles from "../components/Articles";
import articles from "../data/articles";

const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Articles articles={articles} />
        </View>
    )
}

export default ProductsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 38,
        color: "#000",
        marginBottom: 20
    }
  });
  