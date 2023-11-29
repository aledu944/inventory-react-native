import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
    );
}
