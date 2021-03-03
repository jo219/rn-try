import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { styles } from '../styles/styles';

class MenuList extends Component {
	render() {
		return (
			<View style={styles.menuListMainView}>
				<Image source={require('../../assets/icon.png')} style={styles.menuListImage} />
				<View style={styles.menuListDescView}>
					<Text style={styles.menuListName}>{this.props.name}</Text>
					<Text style={styles.menuListPrice}>{this.props.price}</Text>
				</View>
				<TouchableOpacity style={styles.menuListButton} onPress={() => {  }}>
					<Text>Add</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default MenuList;