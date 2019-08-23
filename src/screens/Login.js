import React, { Component } from 'react';
import  {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar, Keyboard } from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions, StackActions } from 'react-navigation'
import Educador from './educador/Educador';
import Responsavel from './responsavel/Responsavel';
import Tarefa from './MainTarefa'

class Login extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        if(this.state.email === 'a@a.com' && this.state.senha === '123'){
            Keyboard.dismiss();
            //this.props.navigation.navigate('Educador');
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Educador'})
                ]
            }))
        }else if (this.state.email === 'b@b.com' && this.state.senha === '456'){
            Keyboard.dismiss();
            //this.props.navigation.navigate('Responsavel');
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Responsavel'})
                ]
            }))
        }else{
            alert("Erro de acesso!")
        }
    }

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
                    <TextInput value={this.state.email}
                        onChangeText={(email) => this.setState({email: email})}
                        returnKeyType='next' 
                        placeholder="usuário ou email" 
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input} 
                    />
                    <TextInput value={this.state.senha}
                        onChangeText={(senha) => this.setState({senha: senha})}
                        returnKeyType='go' 
                        secureTextEntry 
                        placeholder="senha" 
                        autoCapitalize='none'
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}  
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.entrar}>
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
    },
    Responsavel: {
        screen: Responsavel
    },
},{
    initialRouteName: 'Login',
    mode: 'modal',
    defaultNavigationOptions:{
        headerBackTitle: null,
        header: null,

    }
});

const AppContainer = createAppContainer(Navegador);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#ecf0f1'
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
        borderWidth: 1,
        borderColor: '#bdc3c7',
        marginBottom: 10,
        color: 'black',
        paddingHorizontal: 10
        
    },
    buttonContainer: {
        backgroundColor: '#7f8c8d',
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