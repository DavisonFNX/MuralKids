import React, { Component } from 'react';
import Header from './Header';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Salas from './educador/Salas';
import Lista from './educador/ListaAlunos';
import Atividades from './educador/Atividades';
import Tarefa from './educador/Tarefa';
import Educador from './educador/Educador'


export default class Main extends Component {
   static navigationOptions = {
       title: 'Main',
   };

    render() {
        return (
            <View style={styles.container}>
                    
                    <View style={styles.head}>
                        <Header />
                    </View>
                    <ScrollView>
                        <View style={styles.box1}>
                            <Tarefa />
                        </View>
                    </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        height: 130
    },
    box1: {
        height: 500
    }
})
