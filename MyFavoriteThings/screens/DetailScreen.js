import React from "react";
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import { useRoute } from '@react-navigation/native';

const DetailScreen = ({navigation}) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
    <View style={styles.card}>
        <Image
            style={styles.cardImage}
            source={{
                uri: route.params.image
            }}
        />
        <View style={styles.cardContent}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>{route.params.title}</Text>
            </View>
            <Text style={styles.description}>{route.params.desc}</Text>
            <Button
                    onPress={() => { navigation.navigate("Home") }}
                    title='Go to Home Screen'
                    color="#CE49FF"
                    accessibilityLabel='Learn more about this button'
                />
        </View>
    </View>
</View>
  );
}



export default DetailScreen;

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
      height: 300,
      borderRadius: 3,
  },
  card: {
      borderWidth: 0,
      minHeight: 450,
      shadowColor: '#000000',
      shadowOffset: {
          width: 2,
          height: 2
      },
      elevation: 4,
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
      paddingHorizontal: 15,
  },
  title: {
      fontSize: 28,
  },
  description: {
      fontSize: 15,
      paddingBottom: 30,
  },
  cardHeader: {
      paddingBottom: 5,
  }
});
