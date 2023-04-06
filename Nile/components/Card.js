import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

const Card = ({item}) => {

    const navigation = useNavigation();

    /*
        const randomImg = item.id * 1000;
        item.image = "https://picsum.photos/seed/" + randomImg + '/600/600';
    */

    return (
        <TouchableOpacity style={styles.button} onPress={ () => { navigation.navigate("Article", {article: item}) }}>
            <View style={[styles.card]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: item.thumbnail }}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        borderWidth: 0,
        minHeight: 300,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 12,
        marginTop: 0,
        backgroundColor: '#FFFFFF',
        marginRight: 0,
        alignSelf: "stretch"
    },
    cardImage: {
        flex: 1,
        height: 150,
        borderRadius: 3,

    },
    cardContent: {
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    cardHeader: {
        paddingBottom: 5
    },
    title: {
        fontSize: 22
    },
    description: {
        fontSize: 15
    },
});
