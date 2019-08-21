import React, { Component } from 'react';
import  {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform,  KeyboardAvoidingView, StatusBar } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Educador from './educador/Educador'

class Login extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
    };
    render(){
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../images/Logo.png')} />
                </View>
                <View style={styles.formContainer}>
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
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Educador')}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const Navegador = createStackNavigator({
    Login: {
        screen: Login
    },
    Educador: {
        screen: Educador
    }
},{
    initialRouteName: 'Login',
    mode: 'modal',
    defaultNavigationOptions:{
        headerBackTitle: null,

    }
});

const AppContainer = createAppContainer(Navegador);

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
        justifyContent: 'center',
    },
    formContainer: {
        padding: 20,
        width: 360,
    },
    logo: {
        width: 140,
        height: 140,
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


export default AppContainer