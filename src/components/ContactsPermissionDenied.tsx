import React from "react";
import ThemedText from "./themed/ThemedText";
import { StyleSheet } from "react-native";
import ThemedButton from "./themed/ThemedButton";

type Props = { onTakePermission(): void };

export default function ContactsPermissionDenied({ onTakePermission }: Props) {
	return (
		<>
			<ThemedText style={styles.message}>
				Contacts permission is required for the app to work
			</ThemedText>
			<ThemedButton title="Take Permission Again" onPress={onTakePermission} />
		</>
	);
}

const styles = StyleSheet.create({
	message: {
		fontSize: 16,
		maxWidth: 300,
		alignSelf: "center",
		textAlign: "center",
		marginTop: "70%",
		marginBottom: 10,
		paddingHorizontal: 20
	}
});
