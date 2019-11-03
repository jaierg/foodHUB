import React from "react";
import styles from "../assets/styles";

import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	ImageBackground,
	FlatList
} from "react-native";
import CardItem from "../components/CardItem";
import Icon from "../components/Icon";
import Demo from "../assets/data/demo.js";
import {cart} from "../components/CardItem";

const Matches = () => {

	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerMatches}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Cart</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>
					
		</TouchableOpacity>
					s
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Matches;
