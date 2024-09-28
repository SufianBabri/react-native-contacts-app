import React, { useEffect, useState } from "react";
import { fetchContact } from "../utils/contacts-util";
import { FlatList, Image, StyleSheet, View } from "react-native";
import ContactProperty from "../components/contact/ContactProperty";
import type { Contact } from "expo-contacts";
import ThemedActivityIndicator from "../components/themed/ThemedActivityIndicator";
import EmptyContactImage from "../components/EmptyContactImage";
import type { AppStackScreenProps } from "../../types";

export default function ContactDetailsScreen({
	route,
	navigation,
}: AppStackScreenProps<"ContactDetails">) {
	const [contact, setContact] = useState<Contact | undefined>(undefined);
	useEffect(() => {
		async function loadDataToUi() {
			const contact = await fetchContact(route.params.id);
			setContact(contact);
			navigation.setOptions({ title: contact?.name });
		}

		loadDataToUi();
	}, [navigation, route.params.id]);

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
		marginVertical: 4,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 50,
		alignSelf: "center",
		marginVertical: 8,
	},
});
