import React, { Component } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

class LoginOrCreateForm extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }


  onUsernameChange(text) {this.setState({ username: text }); }
  onPasswordChange(text) {this.setState({ password: text }); }
  onFirstNameChange(text) {this.setState({ firstName: text }); }
  onLastNameChange(text) {this.setState({ lastName: text }); }

  renderCreateForm() {
  	if(this.props.create) {
  		return(
  			<View>
	  			<TextInput placeholder="First name" autoCorrect={false} onChangeText={this.onFirstNameChange.bind(this)} />
			    <TextInput placeholder="Last name" autoCorrect={false} onChangeText={this.onLastNameChange.bind(this)} />
  			</View>
  		)
  	}
  }

  render() {
  	return(
  		<View>
	  		<View style={{ justifyContent:'center', alignItems:'center' }}>
	        <TextInput placeholder="Username" autoCorrect={false} onChangeText={this.onUsernameChange.bind(this)} autoCapitalize='none' />
	        <TextInput placeholder="Password" autoCorrect={false} onChangeText={this.onPasswordChange.bind(this)} autoCapitalize='none' secureTextEntry />
		    </View>
		    { this.renderCreateForm(this) }
		    <TouchableOpacity>
		    	<Text>{ this.props.create ? 'Register' : 'Login' }</Text>
		    </TouchableOpacity>
	    </View>
  	)
  }

}

export default LoginOrCreateForm;