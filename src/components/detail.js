import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { styles } from '../styles/styles';

class Detail extends Component {
	render() {
		return (
			<View style={styles.center}>
				<Text style={styles.title}>Detail Screen</Text>
				<Button
					title='View Top Tabs'
					onPress={() => { this.props.navigation.navigate('Top Tabs', {name: "param 1"}) }}
				/>
				<Button
					title='View Bottom Tabs'
					onPress={() => { this.props.navigation.navigate('Bottom Tabs', {name: "param 2"}) }}
				/>
			</View>
		)
	}
}

export default Detail;