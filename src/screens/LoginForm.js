import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar 
                    barStyle='light-content'
                />
                <TextInput 
                    returnKeyType='next' 
                    placeholder="usuário ou email" 
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.input} 
                />
                <TextInput 
                    returnKeyType='go' 
                    secureTextEntry 
                    placeholder="senha" 
                    autoCapitalize='none'
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}  
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: 360,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10
        
    },
    buttonContainer: {
        backgroundColor: '#6ab04c',
        paddingVertical: 15,
        height: 45,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
})