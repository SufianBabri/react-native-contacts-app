import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { routes } from "./routes";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
	const scheme = useColorScheme();

	return (
		<NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack.Navigator>
				<Stack.Screen name={routes.HOME} component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
