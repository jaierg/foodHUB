import React from "react";
import styles from "../assets/styles";

import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const Cart = () => {
	return (
		<TouchableOpacity style={styles.filters}>
			<Text style={styles.filtersText}>
				<Icon name="filter" /> Cart
			</Text>
		</TouchableOpacity>
	);
};

export default Cart;