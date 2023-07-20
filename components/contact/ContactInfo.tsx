import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { Contact } from "expo-contacts";
import { useTheme } from "@react-navigation/native";
import EmptyContactImage from "../EmptyContactImage";
import ThemedText from "../themed/ThemedText";

type Props = { contact: Contact; onPress(): void };

export default function ContactInfo({ contact, onPress }: Props) {
	const { colors } = useTheme();
	const { name, image } = contact;

	return (
		<Pressable
			style={({ pressed }) => [
				styles.container,
				{ backgroundColor: pressed ? colors.border : "transparent" }
			]}
			onPress={onPress}>
			{image ? (
				<Image style={styles.image} source={{ uri: image?.uri }} />
			) : (
				<EmptyContactImage />
			)}
			<ThemedText style={styles.name}>{name}</ThemedText>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		minHeight: 40,
		padding: 8,
		borderRadius: 8,
		marginHorizontal: 2
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 25
	},
	name: {
		fontSize: 16,
		fontWeight: "bold",
		paddingHorizontal: 8
	}
});
