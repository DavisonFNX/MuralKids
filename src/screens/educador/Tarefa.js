import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ImageBackground, Button, TextInput, ScrollView } from 'react-native';
import RadioButtons from '../../components/RadioButtons';
import { CheckBox } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';


const options = [
    {
        key: 'regular',
        text: 'Regular',
    },
    {
        key: 'bom',
        text: 'Bom',
    },
    {
        key: 'otimo',
        text: 'Ótimo',
    },
];

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
    }

    pickImage = () => {
        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 600,
            maxWidth: 800
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri:res.uri, base64: res.data } })
            }
        })
    }
    
    save = async() => {
        alert.alert('Imagem adicionada!', this.state.comment)
    }
}

class UselessTextInput extends Component {
    render() {
      return (
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
          editable = {true}
          maxLength = {150}
        />
      );
    }
  }

class Tarefa extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text: 'Digite aqui a observação sobre a atividade.',
        };
      }

    render() {
        return (
            <View style={styles.container}>
                    <ImageBackground source={require('../../images/mariana.png')} style={styles.fundo}>
                        
                    </ImageBackground>
                    <View style={styles.titulo}>
                            <Text style={{ fontWeight: 'bold'}}>Pintura da Bandeira do Brasil</Text>
                            <Text style={{ color: 'grey', marginBottom: 5}}>06/03/2019</Text>
                    </View>
                    <View style={styles.quadro1}>
                        <Text style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 10, marginLeft: 5 }}>Avaliação da Atividade</Text>
                        <RadioButtons options={options} />

                        {/* <CheckBox
                            center
                            title='Regular'
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            checked={this.state.checked}
                        /> */}
                      

                        <View style={{ alignItems: 'center'}}>
                            <Button
                                title="Salvar"
                                color="#841584"
                                accessibilityLabel="Salva as opções"
                            />
                        </View>

                    </View>
                    <View style={styles.quadro2}></View>
                    <View style={styles.quadro3}>
                        <View style={{
                            backgroundColor: this.state.text,
                            borderBottomColor: '#000000'}}>
                            <UselessTextInput
                                multiline = {true}
                                numberOfLines = {4}
                                onChangeText={(text) => this.setState({text})}
                                value={this.state.text}
                            />
                        </View>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        borderBottomColor: 'grey', 
        borderBottomWidth: 1, 
        marginTop: 10,
        flexDirection: 'column', 
        position: 'absolute',
        alignItems: 'center',
        width: '100%'
    },
    fundo: {
        width: '110%', 
        height: '110%',
        opacity: 0.5,
    },
    quadro1: {      
        position: 'absolute',
        top: 70,
        left: 10,
        height: 225,
        width: 165,
        opacity: 0.6,
        borderRadius: 15,
        paddingTop: 0,
        alignItems: 'flex-start'
    },
    quadro2: {      
        position: 'absolute',
        top: 70,
        left: 185,
        height: 225,
        width: 165,
        backgroundColor: 'grey',
        opacity: 0.6,
        borderRadius: 15,
    },
    quadro3: {      
        position: 'absolute',
        top: 330,
        left: 10,
        height: 100,
        width: 340,
        backgroundColor: 'white',
        opacity: 0.6,
        borderRadius: 15,
    },
    
})

export default Tarefa;