/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
	namespace ReactNavigation {
		interface AppParamList extends AppStackParamList {}
	}
}

export type AppStackParamList = {
	Contacts: undefined;
	ContactDetails: { id: string; name: string };
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> = NativeStackScreenProps<
	AppStackParamList,
	Screen
>;
