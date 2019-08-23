import React, {Component} from 'react';
import { View } from 'react-native';

import Header from '../screens/Header';
import Post from '../components/Post';

export default class Mural extends Component {
    static navigationOptions = {
        header: null,
        headerMode: 'none'
    };

    render() {
        const comments = [{
            nickname: 'Joana Elena',
            comment: 'Excelente Foto!'
        }, {
            nickname: 'Paula Maria',
            comment: 'Está de parabéns!!!'
        }]
        
        return (
            <View style={{ flex:1 }}>
                <Header />
                <Post image={require('../images/marianapintura.jpg')} 
                    comments={comments} />
            </View>
        )
    }
}