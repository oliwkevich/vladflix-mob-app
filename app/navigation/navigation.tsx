import { TypeRootStackParamList } from './navigation.types';
import { userRoutes } from './user.routes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: '#090909' }
				}}
			>
				{userRoutes.map((route) => (
					<Stack.Screen key={route.name} {...route} />
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
