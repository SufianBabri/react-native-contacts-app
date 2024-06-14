import * as Contacts from "expo-contacts";
import { Contact, Fields } from "expo-contacts";
import { Alert, Linking } from "react-native";
import { PhoneNumber } from "expo-contacts/src/Contacts";

export async function hasAccessToContacts() {
	const { granted } = await Contacts.getPermissionsAsync();
	return granted;
}

export async function isContactsPermissionDenied() {
	const { status } = await Contacts.getPermissionsAsync();
	return status === "denied";
}

export async function fetchContacts() {
	const { data } = await Contacts.getContactsAsync({
		fields: [Fields.ID, Fields.Name, Fields.Image]
	});
	return data;
}

export async function canNotAskForContactsPermission() {
	const { canAskAgain } = await Contacts.getPermissionsAsync();
	return !canAskAgain;
}

export async function fetchContact(id: string) {
	return await Contacts.getContactByIdAsync(id, [
		Fields.ID,
		Fields.Name,
		Fields.PhoneNumbers,
		Fields.Image
	]);
}

export async function showAlertForOpeningSettings() {
	Alert.alert(
		"Permission Required",
		"Settings screen will be opened, please allow contacts permission",
		[
			{ text: "Open settings", onPress: async () => await Linking.openSettings() },
			{ text: "Dismiss", style: "cancel" }
		],
		{ cancelable: true }
	);
}
