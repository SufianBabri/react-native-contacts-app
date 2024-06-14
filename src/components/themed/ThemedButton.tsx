import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

type Props = { title: string; onPress(): void };

export default function ThemedButton({ title, onPress }: Props) {
	const { colors } = useTheme();

	return (
		<View style={styles.container}>
			<Button title={title} color={colors.primary} onPress={onPress} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: "center"
	}
});
