import * as Contacts from "expo-contacts";
import { Contact } from "expo-contacts";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo, StyleSheet } from "react-native";
import {
	canNotAskForContactsPermission,
	fetchContacts,
	hasAccessToContacts,
	isContactsPermissionDenied,
	showAlertForOpeningSettings
} from "../utils/contacts-util";
import ContactInfo from "../components/contact/ContactInfo";
import ThemedText from "../components/themed/ThemedText";
import ThemedView from "../components/themed/ThemedView";
import { StatusBar } from "expo-status-bar";
import ContactsPermissionDenied from "../components/ContactsPermissionDenied";
import { useAppForeground } from "../hooks/useAppForeground";
import { routes } from "../navigation/routes";
import ThemedActivityIndicator from "../components/themed/ThemedActivityIndicator";
import { AppStackScreenProps } from "../../types";

export default function ContactsScreen({ navigation }: AppStackScreenProps<"Contacts">) {
	const [contacts, setContacts] = useState<ContactsState>("loading");

	const handleAppReturnedToForeground = useCallback(async () => {
		if (contacts === "permission-denied" && (await hasAccessToContacts())) {
			await attemptToFetchContacts();
		}
	}, [contacts]);
	useAppForeground(handleAppReturnedToForeground);
	const renderContact = useCallback(
		({ item }: ListRenderItemInfo<Contact>) => (
			<ContactInfo
				contact={item}
				onPress={() =>
					navigation.navigate(routes.CONTACT_DETAILS, { id: item.id, name: item.name })
				}
			/>
		),
		[]
	);
	useEffect(() => {
		attemptToFetchContacts();
	}, []);

	async function attemptToFetchContacts() {
		if (await isContactsPermissionDenied()) return setContacts("permission-denied");

		await acquirePermissionAndFetchContacts();
	}

	async function acquirePermissionAndFetchContacts() {
		const { granted } = await Contacts.requestPermissionsAsync();
		if (!granted) return setContacts("permission-denied");

		setContacts("loading");
		setContacts(await fetchContacts());
	}

	async function handleTakePermission() {
		if (await canNotAskForContactsPermission()) return showAlertForOpeningSettings();

		await acquirePermissionAndFetchContacts();
	}

	function renderContent() {
		if (contacts === "loading")
			return <ThemedActivityIndicator style={styles.loader} size="large" />;
		if (contacts === "permission-denied")
			return <ContactsPermissionDenied onTakePermission={handleTakePermission} />;
		return (
			<FlatList
				contentContainerStyle={styles.listContainer}
				data={contacts}
				ListEmptyComponent={
					<ThemedText style={styles.message}>No Contacts found!</ThemedText>
				}
				renderItem={renderContact}
			/>
		);
	}

	return (
		<ThemedView style={styles.container}>
			<StatusBar style="auto" />
			{renderContent()}
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listContainer: {
		flexGrow: 1,
		paddingVertical: 4
	},
	message: {
		flex: 1,
		fontSize: 20,
		alignSelf: "center",
		marginTop: "70%"
	},
	loader: {
		marginTop: "80%"
	}
});

type ContactsState = Contact[] | "loading" | "permission-denied";
