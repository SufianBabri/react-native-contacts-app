import React from "react";
import { Text, TextStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

type Props = { style?: TextStyle; children: string; color?: "primary" };
export default function ThemedText({ style, children, color }: Props) {
	const { colors } = useTheme();

	return (
		<Text style={{ color: color === "primary" ? colors.primary : colors.text, ...style }}>
			{children}
		</Text>
	);
}
