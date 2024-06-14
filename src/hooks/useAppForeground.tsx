import { useEffect } from "react";
import { AppState } from "react-native";

export function useAppForeground(onAppReturnedToForeground: () => void) {
	useEffect(() => {
		let initialFocus = true;
		const unsubscribe = AppState.addEventListener("change", state => {
			if (state !== "active") return;
			if (initialFocus) {
				initialFocus = false;
				return;
			}
			onAppReturnedToForeground();
		});

		return unsubscribe.remove;
	}, [onAppReturnedToForeground]);
}
