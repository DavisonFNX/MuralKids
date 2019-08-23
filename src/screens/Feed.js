import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import Header from './Header';
import Post from '../components/Post';

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Rafael Filho',
            email: 'rafaelprrrflh@gmail.com',
            image: require('../images/marianapintura.jpg'),
            comments: [{
                nickname: 'Maria Lucia',
                comment: 'Muito linda!!',
            }, {
                nickname: 'Paula Fernandes',
                comment: 'Parabéns!!!!',
            }]
        }, {
            id: Math.random(),
            nickname: 'Fatima Silva',
            email: 'fllimah@gmail.com',
            image: require('../images/karinapintura.jpg'),
            comments: [],
        }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) =>
                        <Post key={item.id} {...item} />} />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed