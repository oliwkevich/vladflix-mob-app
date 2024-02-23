import Navigation from '@/navigation/navigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '@/components/header';

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<SafeAreaProvider>
				<Navigation />
			</SafeAreaProvider>
		</>
	);
}
