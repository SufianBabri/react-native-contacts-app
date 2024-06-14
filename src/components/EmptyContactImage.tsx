import React from "react";
import PersonImage from "../res/images/person.svg";
import { StyleSheet, View, ViewStyle } from "react-native";

type Props = { style?: ViewStyle };

export default function EmptyContactImage({ style }: Props) {
	return (
		<View style={[styles.container, style]}>
			<PersonImage fill="#fff" width="100%" height="100%" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: "gray",
		alignItems: "center",
		justifyContent: "center",
		padding: "2%"
	}
});
