import React, { Component } from 'react';
import  {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import Splash from './Splash'

class Login extends Component {
    render(){
        return (
        <View style={styles.container}>
            <Image source={require('../images/Logo.png')} />
            <View>
                <TextInput style={styles.input} placeholder={'Usuário'} />
                <TextInput style={styles.input} placeholder={'Senha'} secureTextEntry={true} />              
            </View>
            <View> 
            <TouchableOpacity 
                    //onPress={() => { this.props.onCreateUser(this.state) }} 
                    style={styles.buttom}>
                    <Text style={styles.buttomText}>Entrar</Text>
            </TouchableOpacity>
            </View>
        </View>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
    input: {
        height: 40,
        width: 250,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#000000',
        margin: 20,
        padding: 10,
    },
    buttom: {
        marginTop: 15,
        padding: 8,
        backgroundColor: '#2f363fff',
        width: 180,
        height: 50,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: '#000000',
        
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})

const SplashRouter = createSwitchNavigator({
    Splash: Splash,
    App: Login
}, {
    initialRouteName: 'Splash'
})

export default SplashRouter