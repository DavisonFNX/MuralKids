import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class Educador extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logomarcas}>
                    <Image source={require('../../images/Logo.png')} style={styles.mural} /> 
                    <Image source={require('../../images/escola.png')} style={styles.logo} />           
                </View>

                <Text style={styles.titulo}>Escola Veritas de Jaboatão dos Guararapes</Text>
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
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        justifyContent: 'flex-start',
    },
    mural: {
        width: 120,
        height: 120,  
        marginRight: 50      
    },
    logo: {
        width: 115,
        height: 139,        
    },
    logomarcas: {
       flexDirection: 'row',
       
    },
    titulo: {
        marginTop: 30,
        marginBottom:20,
        fontSize: 22,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttom: {
        marginTop: 10,
        padding: 8,
        backgroundColor: '#e6e6e6',
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        
    },
    buttomText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
})