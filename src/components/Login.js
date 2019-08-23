import React, { Component } from 'react';
import  {View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar, Keyboard } from 'react-native';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    Login = () => {
        this.props.navigation.navigate('Profile')
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
                        autoFocus={true}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        returnKeyType='next' 
                        placeholder="usuário ou email" 
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input} 
                    />
                    <TextInput value={this.state.senha}
                        onChangeText={password => this.setState({ password })}
                        returnKeyType='go' 
                        secureTextEntry 
                        placeholder="senha" 
                        autoCapitalize='none'
                        style={styles.input}
                        ref={(input) => this.passwordInput = input}  
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.Login}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        this.props.navigation.navigate('Register')
                    }}>
                        <Text style={styles.buttonText}>Criar nova conta...</Text>
                    </TouchableOpacity>
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
        marginBottom: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '700'
    }
})


export default Login