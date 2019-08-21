import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Image, 
    Text,
    TouchableOpacity,
    ImageBackground, 
    Button, 
    TextInput,
    FlatList } from 'react-native';
import RadioButtons from '../../components/RadioButtons';
import AddPhoto from '../../components/AddPhoto';


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
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Pintura da Bandeira do Brasil</Text>
                                <Text style={{ color: 'grey', marginBottom: 5}}>06/03/2019</Text>
                        </View>
                        <View style={styles.quadro1}>
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', marginTop: 10, marginLeft: 10}}>Avaliação da Atividade</Text>
                            <RadioButtons options={options} />
                        
                            <View style={{ alignItems: 'center', marginLeft: 45}}>
                                <Button
                                    title="Salvar"
                                    color="#841584"
                                    accessibilityLabel="Salva as opções"
                                />
                            </View>

                        </View>
                        <View style={styles.quadro2}>
                            <TouchableOpacity style={{alignItems: 'center', marginTop: 60}}>
                                <Image source={require('../../images/photo.png')} style={styles.image} />
                            </TouchableOpacity>
                        </View>

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
    image: {
        width: '60%',
        height: '60%',
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
        alignItems: 'flex-start',
        borderWidth: 1,
    },
    quadro2: {      
        position: 'absolute',
        top: 80,
        left: 185,
        height: 200,
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

export default Tarefa