import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/presentation/routes/RootNavigator';
import { AuthProvider } from './src/presentation/context';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}