import { View, Pressable, Text, Image } from 'react-native';
import { Cart } from '../../../domain/models';

import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
    cartItem: Cart; 
}

export const CartProduct = ({ cartItem }: Props) => {
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
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 20,
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.3)',
                            justifyContent: 'center',
                            paddingVertical: 8,
                            borderRadius: 10
                        }}>
                            <Pressable>
                                <Icon name="minus" />
                            </Pressable><Text>{cartItem.quantity}</Text>
                            <Pressable>
                                <Icon name="plus" />
                            </Pressable>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}
