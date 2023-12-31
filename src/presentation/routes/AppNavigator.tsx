import { Image, Pressable, Text, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import { useAuth } from '../hooks';
import { globalColors } from '../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { CartScreen, CategoryScreen, ProductScreen, ProductsScreen, ProfileScreen, SystemScreen } from '../screens';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export type AppNavigatorParams = {
    Cart: undefined,
    System: undefined,
    Profile: undefined,
    Products: undefined,
    Category: { slug: string },
    Product: { slug: string },
}


const Drawer = createDrawerNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
    return (


        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerShadowVisible: false,
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
                name="Cart"
                options={{
                    title: 'Carrito',
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="shopping-cart" size={20} />
                }}
                component={CartScreen}
            />
            <Drawer.Screen
                name="Product"
                options={{
                    headerShown: false,
                    drawerItemStyle: { display: 'none' },
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="shopping-bag" size={20} />
                }}
                component={ProductScreen}
            />
            <Drawer.Screen
                name="Profile"
                options={{
                    title: 'Perfil',
                    drawerItemStyle: { display: 'none' },
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="shopping-bag" size={20} />
                }}
                component={ProfileScreen}
            />
            <Drawer.Screen
                name="Category"
                options={{
                    headerShown: false,
                    drawerItemStyle: { display: 'none' },
                    drawerIcon: ({ color }) => <Icon color={color}
                        name="shopping-bag" size={20} />
                }}
                component={CategoryScreen}
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
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const { session, closeSession } = useAuth();
    const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();
    
    const { user } = session;
    
    const handleNavigate = () => {
        navigation.navigate('Profile')
    }

    return (
        <DrawerContentScrollView>
            <Pressable onPress={handleNavigate} style={{ paddingHorizontal: 15, marginBottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={{ width: 70, height: 70, borderRadius: 100, marginBottom: 20 }}
                />
                <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: '600' }}>{user.name + ' ' + user.lastname}</Text>
                <Text style={{ textAlign: 'center', fontSize: 12 }}>{user.email}</Text>
            </Pressable>

            <DrawerItemList {...props} />
            <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                <Pressable onPress={closeSession} style={{ flexDirection: 'row', gap: 32, paddingHorizontal: 15 }}>
                    <Icon size={20} name='log-out' />
                    <Text>Cerrar sesion</Text>
                </Pressable>
            </View>
        </DrawerContentScrollView>
    )
}