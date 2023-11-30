import { ProductsScreen, SystemScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

export const AppNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerItemStyle: {
                    borderRadius: 10,
                    paddingHorizontal: 10,
                },
                headerTitleAlign: 'center',
                sceneContainerStyle: {
                    backgroundColor: 'white'
                }
            }}

        >
            <Drawer.Screen
                name="Products"
                options={{
                    title: 'Productos',
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="shopping-bag" size={20} />
                }}
                component={ProductsScreen}
            />
            <Drawer.Screen
                name="System"
                options={{
                    headerShown: false,
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="cast" size={20} />
                }}
                component={SystemScreen}
            />
            {/* <Drawer.Screen options={{ headerShown: false }} name="System" component={SystemScreen} /> */}
        </Drawer.Navigator>
    );
}