import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import { useTheme } from "../contexts/ThemeContext";

const Content = () => {

    const th = useTheme();
    
    
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: th.theme.background}}>

                <ImageBackground source={{ uri: imageTheme(th)}} style={styles.image}>
                



            <Text style={{color: th.theme.body, fontSize: 15, fontWeight: 'bold'}}>
                {textTheme(th)}
            </Text>
            <Button 
                    onPress={()=> { th.toggleTheme(th.theme) }} 
                    title={th.theme.toggleText} 
                    color={th.theme.primary}
            />
            </ImageBackground>
            <StatusBar style="auto"/>
        </View>
    );
}


export default Content;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "auto",
      },
  });
  
//this took me way to long to figure out hahaha!
const imageTheme = (th) => {
    //both these images were found under the Creative Commons License tool
    const images = ['https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/px632353-image-kwvval9i.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=cbb5f8fa5c9dc9d19692e68a470cabe8',"https://live.staticflickr.com/65535/50040002523_af0a7622c9_b.jpg"];
    if (th.theme.id === 0) {
        return (images[0]);
    } else if (th.theme.id === 1) {
        return (images[1]);
    }
}

const textTheme = (th) => {
    if (th.theme.id === 0) {
        return ("Good morning! The sun is shining bright today.");
    } else if (th.theme.id == 1) {
        return ("Good evening! It's a beautiful night tonight.");
    }
}