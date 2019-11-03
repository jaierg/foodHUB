import React, {Component} from "react";
import styles from "../assets/styles";
import {Modal, Text, TouchableOpacity , View, Alert, Button} from 'react-native';
import Icon from "./Icon";


class Filters extends Component {
	state = {
	  modalVisible: false,
	};
  
	setModalVisible(visible) {
	  this.setState({modalVisible: visible});
	}

	render() {
		return (
		  <View style={{marginTop: 10}}>
			<Modal
			  animationType="slide"
			  transparent={false}
			  visible={this.state.modalVisible}
			  onRequestClose={() => {
				Alert.alert('Modal has been closed.');
			  }}>
			  <View style={{marginTop: 70, alignItems: "center", size: 150, justifyContent: "center",}}>
				<View>
				  <Text style={styles.filtersText}>View Cart</Text>

				  <Text style={styles.filtersText, {marginTop: 100}}>Eggs............$3.75</Text>
				  <Text style={styles.filtersText}>Milk............$2.99</Text>
				  <Text style={styles.filtersText}>Bread............$1.99</Text>
				  <Text style={styles.filtersText}>Bananas............$6.99</Text>

	
				  <TouchableOpacity 
					onPress={() => {
					  this.setModalVisible(!this.state.modalVisible);
					}}>
					<Text style={{marginTop: 205, marginRight: 170, backgroundColor: 'blue', borderRadius: 30, alignItems: "center", color: 'white',justifyContent: "center"}}>Done</Text>
				  </TouchableOpacity >
				</View>
			  </View>
			</Modal>
	
			<TouchableOpacity 
			style={styles.filters}
			  onPress={() => {
				this.setModalVisible(true);
			  }}>
				  <Text style={styles.filtersText}>
			  <Icon name="optionsH" /> Cart
			  </Text>
			</TouchableOpacity >
		  </View>
		);
	  }
	}
  

// const Filters = () => {
// 	return (
// 		<TouchableOpacity style={styles.filters}>
// 			<Text style={styles.filtersText}>
// 				<Icon name="optionsH" /> Cart
// 			</Text>
// 		</TouchableOpacity>
// 	);
// };

export default Filters;

