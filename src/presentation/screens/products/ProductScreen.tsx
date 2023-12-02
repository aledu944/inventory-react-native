import { Image, ScrollView, Text, View } from 'react-native'
import { useEffect, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native'
import { AppNavigatorParams } from '../../routes/AppNavigator';

import { FullProduct } from '../../../domain/models';
import { productsRepository } from '../../../domain';
import { CircularProgress, PrimaryButton } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '../../theme/theme';

export const ProductScreen = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState<FullProduct>({} as FullProduct)

    const { slug } = useRoute<RouteProp<AppNavigatorParams, 'Product'>>().params;

    const getProductDetails = async () => {
        setIsLoading(true);
        const data = await productsRepository.findProductBySlug(slug);
        setProduct(data);
        setIsLoading(false);
    }


    useEffect(() => {
        getProductDetails();
    }, [slug])


    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ ...globalStyles.title1, textAlign: 'center', marginBottom: 20 }}>{product?.name}</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={{ uri: product?.image }}
                    />
                </View>
                <View style={{ ...globalStyles.container, gap: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={{ ...globalStyles.title1 }}>{product?.name}</Text>
                            <Text>{product?.brand?.name}</Text>
                        </View>
                        <Text style={{ color: globalColors.primary, fontWeight: 'bold', ...globalStyles.title1 }}>{product?.price} Bs</Text>
                    </View>
                    <View style={{ gap: 16 }}>
                        <Text style={{ ...globalStyles.title1, marginBottom: 2 }}>Detalles del producto</Text>
                        <View>
                            <Text style={globalStyles.title2}>Categoria</Text>
                            <Text style={{ color: globalColors.dark[700] }}>{product?.category?.name}</Text>
                        </View>
                        <View>
                            <Text style={globalStyles.title2}>Descripcion</Text>
                            <Text style={{ color: globalColors.dark[700] }}>{product?.description}</Text>
                        </View>
                    </View>
                    <PrimaryButton onPress={() => console.log('')} label='Agregar al carrito' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
