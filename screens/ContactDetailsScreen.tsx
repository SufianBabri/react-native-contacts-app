import React, { useEffect, useState } from "react";
import { AppStackScreenProps } from "../types";
import { fetchContact } from "../utils/contacts-util";
import { FlatList, Image, StyleSheet, View } from "react-native";
import ContactProperty from "../components/contact/ContactProperty";
import { Contact } from "expo-contacts";
import ThemedActivityIndicator from "../components/themed/ThemedActivityIndicator";
import EmptyContactImage from "../components/EmptyContactImage";

export default function ContactDetailsScreen({
	route,
	navigation
}: AppStackScreenProps<"ContactDetails">) {
	const [contact, setContact] = useState<Contact | undefined>(undefined);
	useEffect(() => {
		loadDataToUi();
	}, []);

	async function loadDataToUi() {
		const contact = await fetchContact(route.params.id);
		setContact(contact);
		navigation.setOptions({ title: contact?.name });
	}

	if (!contact) return <ThemedActivityIndicator size="large" />;

	return (
		<View style={styles.container}>
			<FlatList
				data={contact.phoneNumbers}
				renderItem={({ item }) => (
					<ContactProperty label={item.label} value={item.number ?? ""} />
				)}
				ListHeaderComponent={
					contact.image ? (
						<Image style={styles.image} source={{ uri: contact.image?.uri }} />
					) : (
						<EmptyContactImage style={styles.image} />
					)
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 4
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		alignSelf: "center",
		marginVertical: 8
	}
});
