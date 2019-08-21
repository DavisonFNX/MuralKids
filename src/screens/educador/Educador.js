import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Educador extends Component {
    static navigationOptions = {
        title: 'Login',
        header: null,
        headerStyle: {
            backgroundColor: '#badc58'
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logomarcas}>
                    <Image source={require('../../images/Logo.png')} style={styles.mural} /> 
                    <Image source={require('../../images/escola.png')} style={styles.logo} />           
                </View>

                <Text style={styles.titulo}>Escola Veritas dos Guararapes</Text>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Bem vindo ao aplicativo</Text>
                    <Text >Clique nas opções abaixo para continuar</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Lista das Salas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Lista de alunos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Mensagens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom}>
                        <Text style={styles.buttomText}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'flex-start',
        backgroundColor: '#badc58'
    },
    mural: {
        width: 120,
        height: 120,  
        marginRight: 50      
    },
    logo: {
        width: 88,
        height: 114,
        marginTop: 10        
    },
    logomarcas: {
       flexDirection: 'row',
       
    },
    titulo: {
        marginTop: 30,
        marginBottom:20,
        fontSize: 22,
        color: '#1e3799',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttom: {
        marginTop: 10,
        width: 330,
        backgroundColor: '#6ab04c',
        paddingVertical: 12,
        height: 45,
        
    },
    buttomText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    },
})