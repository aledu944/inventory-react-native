import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import { useAuth } from '../hooks';
import { Text, View } from 'react-native';
import { AppNavigator } from './AppNavigator';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    
    const { authState } = useAuth();

    if( authState === 'checking' ){
        return (
            <View>
                <Text>Cargando...</Text>
            </View>
        )
    }

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            {
                authState == 'not-auth'
                ? <Stack.Screen name="Auth" component={AuthNavigator} />
                : <Stack.Screen name="Auth" component={AppNavigator} />
            }
            
        </Stack.Navigator>
    );
}
