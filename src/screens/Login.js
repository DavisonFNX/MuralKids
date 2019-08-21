import React, { Component } from 'react';
import  {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform,  KeyboardAvoidingView } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import LoginForm from './LoginForm';

class Login extends Component {
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/Logo.png')} />
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#badc58'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 140,
        height: 140,
    },


    // input: {
    //     height: 40,
    //     width: 250,
    //     borderRadius: 20,
    //     borderWidth: 1,
    //     borderColor: '#000000',
    //     margin: 10,
    //     padding: 10,
    //     backgroundColor: '#FFF'
    // },
    // buttom: {
    //     marginTop: 15,
    //     padding: 8,
    //     backgroundColor: '#2f363fff',
    //     width: 180,
    //     height: 50,
    //     borderRadius: 12,
    //     borderWidth: 3,
    //     borderColor: '#000000',
        
    // },
    // buttomText: {
    //     fontSize: 20,
    //     color: '#FFF',
    //     textAlign: 'center',
    //     fontWeight: 'bold'
    // },
})


export default Login