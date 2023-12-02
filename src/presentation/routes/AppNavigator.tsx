import { Image, Pressable, Text, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';

import { useAuth } from '../hooks';
import { globalColors } from '../theme/theme';
import Icon from 'react-native-vector-icons/Feather';
import { ProductScreen, ProductsScreen, SystemScreen } from '../screens';

export type AppNavigatorParams = {
    Products: undefined,
    Product: { slug: string },
    System: undefined,
} 


const Drawer = createDrawerNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
    return (

        
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
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
    const { user } = session;

    return (
        <DrawerContentScrollView>
            <View style={{ paddingHorizontal: 15, marginBottom: 10, justifyContent:'center', alignItems: 'center' }}>
                <Image
                    source={{ uri:'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                    style={{ width: 70, height: 70, borderRadius: 100, marginBottom: 20 }}
                />
                <Text style={{ textAlign:'center', fontSize: 12, fontWeight: '600' }}>{ user.name + ' ' + user.lastname }</Text>
                <Text style={{ textAlign:'center', fontSize: 12 }}>{ user.email  }</Text>
            </View>

            <DrawerItemList {...props}/>
            <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
                <Pressable onPress={closeSession} style={{ flexDirection: 'row', gap: 32, paddingHorizontal: 15 }}>
                    <Icon size={ 20 } name='log-out'/>
                    <Text>Cerrar sesion</Text>
                </Pressable>
            </View>
        </DrawerContentScrollView>
    )
}