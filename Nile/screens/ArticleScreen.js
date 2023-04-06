import React from "react";
import { StyleSheet, View, Text, ScrollView, Image, Button} from 'react-native';

const ArticleScreen = ({ route }) => {

    const {article} = route.params;

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.articleImage} source={{uri: article.thumbnail}} />
            <Text style={styles.title}>{article.title} {"$" + article.price}</Text>
            <Text style={styles.description}>{article.description}</Text>
            <Text style={styles.tags}>{"Rating " + article.rating + " | "}{"Brand " + article.brand}</Text>
            <Button
                    onPress={() => { alert("You can buy this " + article.title + " as soon as my loan gets approved by the bank!") }}
                    title='Buy Now'
                    color="#267F00"
                    accessibilityLabel='Learn more about this button'
                />
        </ScrollView>
    )
}

export default ArticleScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      paddingTop: 20 
    },
    tags: {
        fontSize: 16,
        fontWeight: "normal",
        marginTop: 20,
        marginBottom: 15,
        alignSelf: "flex-start",
        color: "#666"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 15,
    },
    body: {
        fontSize: 18
    },
    articleImage: {
        height: 250,
        borderRadius: 5,
        marginBottom: 20
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%"
    }
  });