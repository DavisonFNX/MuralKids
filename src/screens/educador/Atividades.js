import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class Atividades extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>Atividades em Classe</Text>
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/mariana.png')} style={styles.foto} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Marina Lima</Text>
                            <Text style={{ color: 'grey'}}>Responsável: Carol Lima</Text>
                        </View>
                    </View>                        
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/lista.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Pintura da Bandeira do Brasil</Text>
                            <Text style={{ color: 'grey'}}>06/05/2019</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/lista.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Escrita das vogais</Text>
                            <Text style={{ color: 'grey'}}>06/05/2019</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/lista.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Operações Matemáticas</Text>
                            <Text style={{ color: 'grey'}}>15/05/2019</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/lista.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Teatrinho</Text>
                            <Text style={{ color: 'grey'}}>11/05/2019</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/lista.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Pintura</Text>
                            <Text style={{ color: 'grey'}}>11/05/2019</Text>
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
        resizeMode: 'contain',
        marginLeft: 5
    },
    foto: {
        width: 60,
        height: 60,
        marginLeft: 5,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#e9e9e9',
    }
    
})

export default Atividades