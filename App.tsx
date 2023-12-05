import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/presentation/routes/RootNavigator';
import { AuthProvider, CartProvider } from './src/presentation/context';
import { OrdersProvider } from './src/presentation/context/orders/OrdersProvider';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <CartProvider>
          <OrdersProvider>
            <RootNavigator />
          </OrdersProvider>
        </CartProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}