import React from 'react'
import { View, Text } from 'react-native';

import { useAuth, useCart } from '../../hooks';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../shared/PrimaryButton';
import { formatCurrency } from '../../../helpers/format-currency';

export const CartDetails = () => {

    const { total } = useCart();
    const { session } = useAuth();

    const handleSubmit = () => {
        
    }
    
    return (
        <View style={{ borderWidth: 1, borderRadius: 20, borderColor: 'rgba(0,0,0,0.1)', padding: 20, gap: 20 }}>
            <Text style={globalStyles.title1 }>Detalles de venta</Text>
            
            <View>
                <Text style={globalStyles.title2 }>Nombre del cliente</Text>
                <Text>{ session.user.name  } { session.user.lastname }</Text>
            </View>

            <View>
                <Text style={globalStyles.title2 }>Correo:</Text>
                <Text>{ session.user.email }</Text>
            </View>

            <Text style={globalStyles.title2}>Total a pagar: { formatCurrency( total ) }</Text>
            <PrimaryButton
                label='Realizar compra'
                onPress={() => console.log('comprando')}
            />
        </View>
    )
}
