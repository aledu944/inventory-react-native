import React from 'react'
import { View, Text } from 'react-native';

import { useCart } from '../../hooks';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../shared/PrimaryButton';

export const CartDetails = () => {

    const { total } = useCart();

    return (
        <View style={{ borderWidth: 1, borderRadius: 20, borderColor: 'rgba(0,0,0,0.05)', padding: 20, gap: 20 }}>
            <Text style={globalStyles.title1 }>Detalles de venta</Text>
            <Text>Total a pagar: { total }</Text>
            <PrimaryButton
                label='Realizar compra'
                onPress={() => console.log('comprando')}
            />
        </View>
    )
}
