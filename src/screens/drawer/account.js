import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LoginOrCreateForm from '../../components/loginOrCreateForm';
import { styles } from '../../styles/styles.js';


const Account = () =>
	<View style={styles.center}>
		<Text style={styles.title}>Account</Text>
		<LoginOrCreateForm create/>
	</View>

export default Account;