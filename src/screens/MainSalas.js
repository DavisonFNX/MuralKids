import React, { Component } from 'react';
import Header from './Header';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Salas from './educador/Salas'

import { createDrawerNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

import MainTarefa from './MainTarefa'

class MainSalas extends Component {
    static navigationOptions = {
        header: null,
        headerMode: 'none'
    };

    render() {
        return (
            <View style={styles.container}>
                    <ScrollView>
                    <View style={styles.head}>
                        <Header />
                    </View>
                    
                        <View style={styles.box1}>
                            <Salas />
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
        height: 490
    }
})

export default MainSalas
