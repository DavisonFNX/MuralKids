import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

class Salas extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontWeight: 'bold', fontSize: 18 }}>Lista de Salas de Aula</Text>
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Alfabetização I</Text>
                            <Text style={{ color: 'grey'}}>Tarde</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Jardim II</Text>
                            <Text style={{ color: 'grey'}}>Manhã</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Alfabetização II</Text>
                            <Text style={{ color: 'grey'}}>Tarde</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Jardim III</Text>
                            <Text style={{ color: 'grey'}}>Manhã</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Jardim I</Text>
                            <Text style={{ color: 'grey'}}>Tarde</Text>
                        </View>
                    </TouchableOpacity>                        
                </View>
                <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                        <Image source={require('../../images/classe.png')} style={styles.image} />
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text>Cheche</Text>
                            <Text style={{ color: 'grey'}}>Manhã</Text>
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
    }
})

export default Salas