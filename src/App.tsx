import * as SystemUI from "expo-system-ui";
import AppNavigator from "../navigation/AppNavigator";

SystemUI.setBackgroundColorAsync("transparent");

export default function App() {
	return <AppNavigator />;
}
