import React from 'react';
import { Text, View } from 'react-native';

const ReservedList = (props) => {
	return (
		<View>
			<Text>{props.name}</Text>
			<Text>{props.status}</Text>
		</View>
	)
}

export default ReservedList;