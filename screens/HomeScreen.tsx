import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function HomeScreen() {
	const { colors } = useTheme();

	return (
		<View style={{ backgroundColor: colors.background }}>
			<Text style={{ color: colors.text }}>Home Screen</Text>
			<StatusBar style="auto" />
		</View>
	);
}
