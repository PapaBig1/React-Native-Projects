import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "./Card";

const renderCard = ({item}) => {
    return (
        <Card item={item} />
    );
}

const Articles = ({articles}) => {

    if (articles != null) {
        return (
            <FlatList
                style={StyleSheet.container}
                data={articles}
                renderItem={renderCard}
                keyExtractor={item => item.id}
                ItemSeparatorComponent = { () => {
                    return (
                        <View style={styles.separator} />
                    );
                }}

            />
        )
    } else {
        return(
            <View style={StyleSheet.container}>
                <Text>Loading products...</Text>
            </View>
        );
    }
}

export default Articles;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: 20
    },
    list: {
        paddingHorizontal: 17,
        backgroundColor: "#eeeeee",
        paddingBottom: 12
    },
    header: {
        marginTop: 20
    },
    title: {
        fontSize: 38,
        color: "#000",
        marginBottom: 20
    },
    separator: {
        marginTop: 10
    }
});
