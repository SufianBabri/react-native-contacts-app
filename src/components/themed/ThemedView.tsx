import React from "react";
import { View, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

type Props = { style?: ViewStyle; children: React.ReactNode | undefined; bg?: "card" };

export default function ThemedView({ style, children, bg }: Props) {
	const { colors } = useTheme();

	return (
		<View
			style={{ backgroundColor: bg === "card" ? colors.card : colors.background, ...style }}>
			{children}
		</View>
	);
}
