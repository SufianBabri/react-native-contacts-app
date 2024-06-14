import React from "react";
import ThemedText from "../themed/ThemedText";
import { StyleSheet } from "react-native";
import ThemedView from "../themed/ThemedView";

type Props = { label: string; value: string };

export default function ContactProperty({ label, value }: Props) {
	return (
		<ThemedView style={styles.container} bg="card">
			<ThemedText style={styles.label} color="primary">
				{label}
			</ThemedText>
			<ThemedText style={styles.value}>{value}</ThemedText>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		marginHorizontal: 8,
		marginVertical: 4,
		rowGap: 2,
		elevation: 4,
		zIndex: 1,
		padding: 16
	},
	label: {
		fontSize: 18,
		fontWeight: "bold",
		textTransform: "capitalize"
	},
	value: {
		fontSize: 16
	}
});
