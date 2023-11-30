import { ProductsScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Products" component={ProductsScreen} />
        </Drawer.Navigator>
    );
}