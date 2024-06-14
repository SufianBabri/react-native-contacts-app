import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorScheme } from "react-native";
import { routes } from "./routes";
import ContactDetailsScreen from "../screens/ContactDetailsScreen";
import ContactsScreen from "../screens/ContactsScreen";
import { AppStackParamList } from "../../types";

const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
	const scheme = useColorScheme();

	return (
		<NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
			<AppStack.Navigator>
				<AppStack.Screen
					name={routes.CONTACTS}
					options={{ title: "Contacts" }}
					component={ContactsScreen}
				/>
				<AppStack.Screen
					name={routes.CONTACT_DETAILS}
					options={({ route }) => ({ title: route.params.name })}
					component={ContactDetailsScreen}
				/>
			</AppStack.Navigator>
		</NavigationContainer>
	);
}
