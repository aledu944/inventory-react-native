import { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';

import { useAuth } from '../../hooks'
import { CustomerPurchases } from '../../../domain/models/profile/CustomerPurchases';
import { getOrderByClient } from '../../../domain/repositories/profileRepository';

import { formatDate } from '../../../helpers/fotmat-date';
import { globalColors, globalStyles } from '../../theme/theme';
import { formatCurrency } from '../../../helpers/format-currency';

import { CircularProgress } from '../../components';

export const ProfileScreen = () => {

    const { session } = useAuth();

    const [orders, setOrders] = useState<CustomerPurchases[]>([])
    const [isLoading, setIsLoading] = useState(false);

    const getOrders = async () => {
        setIsLoading(true);
        const data = await getOrderByClient(session.user.id);
        setOrders(data);
        setIsLoading(false);
    }

    useEffect(() => {
        getOrders();
    }, [])

    const onRefresh = useCallback(async () => {
        await getOrders();
    }, [])

    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ ...globalStyles.container }}>
                <FlatList
                    refreshControl={
                        <RefreshControl onRefresh={onRefresh}  refreshing={ false }/>
                    }
                    data={orders}
                    renderItem={({ item: order }) => (
                        <View>
                            <View key={order.id} style={{ padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10, borderColor: globalColors.dark[200] }}>
                                <Text style={globalStyles.title3}>
                                    Cantidad de productos: <Text style={{ fontSize: 14, fontWeight: 'normal' }}>#{order.orderDetails.length}</Text>
                                </Text>
                                <Text style={globalStyles.title3}>
                                    Total pagado: <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{formatCurrency(order.total)}</Text>
                                </Text>
                                <Text style={globalStyles.title3}>
                                    Fecha de comptra: <Text style={{ fontSize: 14, fontWeight: 'normal' }}>{formatDate(order.createdAt)}</Text>
                                </Text>
                            </View>
                        </View>
                    )}

                    ListHeaderComponent={() => (
                        <View style={{ marginBottom: 30, flexDirection: 'row', alignItems: 'center', gap: 30 }}>
                            <Image
                                source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                                style={{ width: 70, height: 70, borderRadius: 100 }}
                            />
                            <View>
                                <Text style={globalStyles.title1}>{session.user.name} {session.user.lastname}</Text>
                                <Text style={globalStyles.title3}>{session.user.email}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        </SafeAreaView>
    )
}
