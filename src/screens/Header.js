import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Image } from 'react-native';
import foto from '../images/professora.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image source={require('../images/Logo.png')} style={styles.logo} />
                    </View>
                    <View style={styles.userContainer}>
                        <Text style={{ fontWeight: 'normal', fontSize: 11 }}>Educadora</Text>
                        <Image source={foto} style={styles.image} />
                        <Text style={styles.nome}>Isabelle Patricia</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        backgroundColor: '#bdc3c7',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'grey',
    },
    userContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        marginRight: 10,
        marginBottom: 10
    },
    nome: {
        fontWeight: 'bold', 
        fontSize: 13,
    },
    rowContainer: {
        alignItems: 'center',
        flexDirection: 'row'

    },
    logo: {
        width: 110,
        height: 110,  
        marginLeft: 10,     
    },
})

export default Header