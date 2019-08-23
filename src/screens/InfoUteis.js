import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class InfoUteis extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logos}>
                    <View style={styles.corpo}>
                        <Image source={require('../images/Logo.png')} style={styles.marca}/>
                    </View>
                    <View style={{alignItems: 'center', marginTop: 15}}>
                        <Image source={require('../images/escola.png')} style={styles.marca2} />
                        <Text style={styles.titulo}>Escola Veritas dos Guararapes</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.subtitulo}>Informações úteis</Text>
                </View>
                <View style={styles.texto}>
                    <Text style={{fontWeight: '700', marginBottom: 5}}>Endereço:</Text>
                    <Text>Rua Principal, 242 - Centro 54310-824 Jaboatão dos Guararapes -PE (81) 3456.9833 escola_veritas@gmail.com </Text>
                    <Text style={{fontWeight: '700', marginBottom: 5, marginTop: 15}}>Diretora:</Text>
                    <Text>Maria do Carmo Fernandes  mcarmofernandes@gmail.com (81)99876.5643</Text>
                    <Text style={{fontWeight: '700', marginBottom: 5, marginTop: 15}}>Coordenadora:</Text>
                    <Text>Fatima da SIlva Alves  fatimaalves@gmail.com (81)98754.5548</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center'
    },
    logos: {
        alignItems: 'center'
    },
    marca: {
        height: 100,
        width: 100,
        marginBottom: 10
    },
    marca2: {
        height: 90,
        width: 70,
        marginTop: 5
    },
    titulo: {
        marginTop: 5,
        marginBottom:15,
        fontSize: 18,
        color: '#1e3799',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitulo: {
        fontWeight: 'bold'
    },
    corpo: {
        backgroundColor: '#dfe4ea',
        alignItems: 'center',
        width: 360,
    },
    texto:{
        marginLeft: 15,
        marginTop:15
    }
})