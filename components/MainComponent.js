import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

const  Main= () => (
    <View style={styles.container}>
        <Image
            style={styles.tinyLogo}
            source={require('./images/ThePercepti.png') }
        />
        <ImageBackground source={require('./images/namaste.jpg')} style={styles.image}>
            <Text style={styles.text}>Namaste!</Text>
        </ImageBackground>

      
    </View>
);

const styles = StyleSheet.create({
    container: {
       flex: 1,
       //backgroundColor: '#FF6238',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: "column"
    },

    tinyLogo: {
    width: 50,
    height: 50,
  },
    image: {
       flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width:395
    },
    text: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",        
        alignItems: 'center',
        fontFamily: "serif"
    }
});


export default Main;