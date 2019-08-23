import React, { Component } from 'react';
import Header from './Header';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Tarefa from './educador/Tarefa';

class MainTarefa extends Component {
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
        height: 490
    }
})

export default MainTarefa
