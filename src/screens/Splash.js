import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image } from 'react-native';


export default class Splash extends Component{
    
    constructor(props) {
        super(props);
      
        this.state = { isLoading: true }
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
        backgroundColor: '#badc58'
    }
})