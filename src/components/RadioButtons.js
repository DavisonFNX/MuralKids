import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButtons extends Component {
	state = {
		value: null,
	};

	render() {
		const { options } = this.props;
		const { value } = this.state;

		return (
			<View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
                            <TouchableOpacity  onPress={() => {
                                        this.setState({
                                            value: item.key,
                                        });
                                    }} style={{flexDirection: 'row'}}>
								
								<TouchableOpacity
                                    style={styles.circle}
                                    onPress={() => {
                                        this.setState({
                                            value: item.key,
                                        });
                                    }}
                                >
                                    {value === item.key && <View style={styles.checkedCircle} />}
                                </TouchableOpacity>

                                <Text>{item.text}</Text>
                                
                            </TouchableOpacity>

						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
        justifyContent: 'center',
        alignContent: 'stretch',
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 5,
	},

	circle: {
		height: 20,
		width: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#000',
		alignItems: 'center',
        justifyContent: 'center',
		marginLeft: 10,
		marginRight: 10,
	},
  
	checkedCircle: {
		width: 14,
		height: 14,
		borderRadius: 7,
		backgroundColor: '#794F9B',
	},
});
