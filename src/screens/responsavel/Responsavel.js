import React, { Component } from 'react';
import  {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import Atividades from '../educador/Atividades'
import Navigator from '../Navigator'
import InfoUteis from '../InfoUteis';


class Responsavel extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logomarcas}>
                    <Image source={require('../../images/Logo.png')} style={styles.mural} /> 
                    <View style={{alignItems: 'center' }}>
                        <Image source={require('../../images/escola.png')} style={styles.logo} />
                        <Text style={styles.titulo}>Escola Veritas de Jaboatão dos Guararapes</Text>
                    </View>           
                </View>
                
                <View style={styles.dadosaluno}>
                    <Image source={require('../../images/aluno.png')} style={styles.fotoaluno} />
                    <View style={styles.aluno}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,}}>Mariana Lima</Text>
                        <Text >Alfabetização</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Bem vindo ao aplicativo</Text>
                    <Text >Clique nas opções abaixo para continuar</Text>
                </View>
                <View>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom} onPress={() => this.props.navigation.navigate('Atividades')}> 
                        <Text style={styles.buttomText}>Atividades Escolares</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom} onPress={() => this.props.navigation.navigate('Navigator')}>
                        <Text style={styles.buttomText}>Mural</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        //onPress={() => { this.props.onCreateUser(this.state) }} 
                        style={styles.buttom} onPress={() => this.props.navigation.navigate('InfoUteis')}>
                        <Text style={styles.buttomText}>Informações Úteis</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const Routes = createStackNavigator({
    Responsavel: {
        screen: Responsavel
    },
    Atividades: {
        screen: Atividades
    },
    InfoUteis:{
        screen: InfoUteis
    },
    Navigator:{
        screen: Navigator
    }
},{
    initialRouteName: 'Responsavel',
    mode: 'modal',
    defaultNavigationOptions:{
        headerBackTitle: null,
        header: null,

    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'space-between',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        justifyContent: 'flex-start',
        backgroundColor: '#ecf0f1'
    },
    mural: {
        width: 120,
        height: 120,  
        marginRight: 50      
    },
    logo: {
        width: 70,
        height: 94, 
        marginTop: 5     
    },
    logomarcas: {
       flexDirection: 'row',
       
    },
    fotoaluno: {
        width: 130,
        height: 130,
        borderRadius: 100,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey'
    },
    dadosaluno: {

        flexDirection: 'row',
        marginBottom: 20,
    },
    aluno:{
        marginTop: 50,
        fontWeight: 'bold'
    },
    titulo: {
        marginTop: 5,
        marginBottom:20,
        fontSize: 12,
        color: 'green',
        fontWeight: 'bold',
        textAlign: 'center',
        width: 150,
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

export default Routes