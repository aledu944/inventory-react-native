
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useCart } from '../../hooks';
import { CartProduct } from '../../components';


export const CartScreen = () => {

    const { cart } = useCart();

    return (
        <View style={{ ...globalStyles.container, flex: 1 }}>
            <View>
                <Text style={{ ...globalStyles.title1 }}>Carrito de compras</Text>
                <Text>Listado de productos en tu carrito</Text>
            </View>

            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartProduct cartItem={ item }/>
                )}
                contentContainerStyle={{ gap: 30 }}
            />
        </View>
    )
}
