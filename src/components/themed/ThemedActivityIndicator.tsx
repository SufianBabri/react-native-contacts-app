import React from "react";
import { ActivityIndicator, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";

type Props = { style?: ViewStyle; size?: number | "small" | "large" | undefined };

export default function ThemedActivityIndicator({ style, size }: Props) {
	const { colors } = useTheme();

	return <ActivityIndicator style={style} size={size} color={colors.primary} />;
}
