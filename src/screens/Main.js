import React, { Component } from 'react';
import Header from './Header';
import { View, Text } from 'react-native';
import Salas from './educador/Salas';
import Lista from './educador/ListaAlunos';
import Atividades from './educador/Atividades';
import Tarefa from './educador/Tarefa';

export default class Main extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <Atividades />
            </View>
        )
    }
}
