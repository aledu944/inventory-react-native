
import { Text, View, FlatList, Image, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useCart } from '../../hooks';
import { CartProduct } from '../../components';
import { CartDetails } from '../../components/cart/CartDetails';


export const CartScreen = () => {

    const { cart } = useCart();

    return (
        <View style={{ ...globalStyles.container, flex: 1 }}>


            <FlatList
                data={cart}
                renderItem={({ item }) => (
                    <CartProduct cartItem={item} />
                )}
                contentContainerStyle={{ gap: 30 }}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ ...globalStyles.title1 }}>Carrito de compras</Text>
                        <Text>Listado de productos en tu carrito</Text>
                    </View>
                )}

                ListFooterComponent={<CartDetails />}
            />
        </View>
    )
}
