import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}