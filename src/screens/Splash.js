import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image } from 'react-native';


export default class Splash extends Component{
    
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/Logo.png')} />           
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28
    }
})