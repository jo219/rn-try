import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/styles.js';
import MenuList from '../../components/menuList';

class MenuTab extends Component {
	render() {
		return(
			<View style={styles.menuView}>
				<MenuList name="Es Jeruk" price="2k" />
				<MenuList name="Jeyuk Anget" price="2k" />
				<MenuList name="Lemon Tea" price="2k" />
				<TouchableOpacity
					onPress={() => { this.props.navigation.navigate('Detail') }}
					style={styles.menuOrderButton}>
					<Text style={{color: 'white', fontSize: 18}}>Order</Text>
				</TouchableOpacity>
				<Text>You can customize your order by chat afterwards</Text>
			</View>
		)
	}
}

export default MenuTab;