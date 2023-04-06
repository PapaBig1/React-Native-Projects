import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const Card = ({item}) => {
    
    const navigation = useNavigation();
    //const stuff = ["hello", "stuff"];

      const goToMessageScreen = () => {
    navigation.navigate('Details', {
      desc: item.desc,
      image: item.image,
      title: item.title,
    })};
    
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    style={styles.cardImage}
                    source={{
                        uri: item.image,
                    }}
                />
                <View style={styles.cardContent}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <Text style={styles.description}>
                        <Button
                            onPress={goToMessageScreen}
                            title='Go to Detail Screen'
                            color="#CE49FF"
                            accessibilityLabel='Learn more about this button'
                        />
                    </Text>
                </View>
            </View>
        </View>




    )
}

export default Card;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3D3D3D',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    cardImage: {
        flex: 1,
        height: 150,
        borderRadius: 10,
    },
    card: {
        borderWidth: 0,
        minHeight: 300,
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 2
        },
        elevation: 10,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 12,
        marginTop: 0,
        backgroundColor: '#919191',
        marginRight: 0,
        alignSelf: "stretch",
    },
    cardContent: {
        paddingVertical: 15,
        paddingHorizontal: 50,
    },
    title: {
        fontSize: 28,
    },
    description: {
        fontSize: 15,
    },
    cardHeader: {
        paddingBottom: 5,
    }
});