import { View, Pressable, Text, Image } from 'react-native';
import { Cart } from '../../../domain/models';

import Icon from 'react-native-vector-icons/AntDesign';
import { useCart } from '../../hooks';

interface Props {
    cartItem: Cart; 
}

export const CartProduct = ({ cartItem }: Props) => {

    const { addProductToCart, removeProductFromCart, decreaseQuantity } = useCart();

    return (
        <View>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                <View style={{ backgroundColor: 'rgba(0,0,0,0.1)', padding: 10, borderRadius: 10 }}>
                    <Image
                        style={{ width: 70, height: 70 }}
                        source={{ uri: cartItem.product.image }}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: 'bold' }}>{cartItem.product.name}</Text>
                    <Text>Precio: ${cartItem.product.price}</Text>
                    <View style={{ flexDirection: 'row', justifyContent:'space-between', alignItems:'center', width: '60%' }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 20,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.3)',
                            justifyContent: 'center',
                            paddingVertical: 8,
                            paddingHorizontal: 10,
                            borderRadius: 10
                        }}>
                            <Pressable onPress={() => decreaseQuantity(cartItem.product.id) }>
                                <Icon name="minus" />
                            </Pressable><Text>{cartItem.quantity}</Text>
                            <Pressable onPress={() => addProductToCart(cartItem.product)}   >
                                <Icon name="plus" />
                            </Pressable>
                        </View>
                        <Pressable onPress={() => removeProductFromCart(cartItem.product.id) }>
                            <Icon size={ 18 } name="delete" color="red"/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}
