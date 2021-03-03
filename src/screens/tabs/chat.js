import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js';

class ChatTab extends Component {
	state = {
		currentInput: ''
	}
	render() {
		return(
			<View style={styles.chatMainView}>
				<Text style={styles.title}>Chat admin here</Text>

				<KeyboardAvoidingView 
					behavior={Platform.OS === "ios" ? "padding" : "height"}
					style={styles.chatInputView}
				>
					<TextInput 	
						style={styles.chatInputField} 
						placeholder={'Chat with the restaurant owner here...'} 
						onChangeText={text => { this.setState({ currentInput: text }) } } />
					<TouchableOpacity onPress={() => { } }>
					  <View style={styles.chatInputButton}>
					    <Text style={styles.addText}>+</Text>
					  </View>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

export default ChatTab;