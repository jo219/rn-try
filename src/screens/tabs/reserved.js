import React from 'react';
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles.js';
import ReservedList from '../../components/reservedList';

const ReservedTab = () =>
	<View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
		<Text style={styles.title}>Reservation status here...</Text>

		<ReservedList name="Order 03-03-2021  01:24 AM" status="done" />
		<ReservedList name="Order 03-03-2021  02:24 AM" status="delivering" />
		<ReservedList name="Order 03-03-2021  03:24 AM" status="accepted" />

		
	</View>


export default ReservedTab;