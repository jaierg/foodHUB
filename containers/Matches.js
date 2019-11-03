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
	if (item == cart) {

	}
	return (
		<ImageBackground
			source={require("../assets/images/bg.png")}
			style={styles.bg}
		>
			<View style={styles.containerMatches}>
				<ScrollView>
					<View style={styles.top}>
						<Text style={styles.title}>Matches</Text>
						<TouchableOpacity>
							<Text style={styles.icon}>
								<Icon name="optionsV" />
							</Text>
						</TouchableOpacity>
					</View>

					<FlatList
						numColumns={2}
						data={Demo}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity>
								<CardItem
									image={item.image}
									name={item.name}
									status={item.status}
									variant
								/>
							</TouchableOpacity>
						)}
					/>
				</ScrollView>
			</View>
		</ImageBackground>
	);
};

export default Matches;
