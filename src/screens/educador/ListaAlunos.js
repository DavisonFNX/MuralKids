import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class ListaAlunos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.titulo}>Lista de Alunos - Alfabetização I</Text>
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/mariana.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>Marina Lima</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Carol Lima</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/joao.jpg')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>João Vitor</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Vitor Fleming</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/carlos.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>Carlos Filho</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Orson Neves</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/pedro.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>Pedro Luiz</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Silvia Cristina</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/marina.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>Marina Lima</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Maniela Freitas</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/mariana.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.texto}>Marina Lima</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Carol Lima</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        width: 60,
        height: 60,
        marginLeft: 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#e9e9e9',
    },
    texto: {
        fontWeight: 'bold',
    },
    titulo: {
        textAlign: 'center', 
        marginTop: 5,
        fontWeight: 'bold', 
        fontSize: 18
    }
})

export default ListaAlunos