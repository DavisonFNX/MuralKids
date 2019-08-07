import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image } from 'react-native';


export default class Splash extends Component{
    componentDidMount(){
        setTimeout(
            () => { this.props.navigation.navigate('App') }, 2000
        )
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
        justifyContent: 'center'
    }
})