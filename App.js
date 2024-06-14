import * as SystemUI from "expo-system-ui";
import AppNavigator from "./src/navigation/AppNavigator";

SystemUI.setBackgroundColorAsync("transparent");

export default function App() {
	return <AppNavigator />;
}
