import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { globalStyles } from '../../theme/theme';
import { Product } from '../../../domain/models';
import { productsRepository } from '../../../domain';
import { ProductCard, SearchInputProduct } from '../../components';

export const ProductsScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);

    const getAllProducts = async () => {
        const token = await AsyncStorage.getItem('AUTH_TOKEN');
        const data = await productsRepository.findMany(token);
        setProducts(data);
    }

    useEffect(() => {
      getAllProducts();
    }, [])
    
    

    return (
        <View style={{...globalStyles.container, gap: 20 }}>
            <StatusBar  style='light'/>
            <View>
                <Text style={{...globalStyles.title1 }}>Productos mas populares</Text>
                <Text>Encuentra el producto de tu interes</Text>
            </View>

            <SearchInputProduct/>

            <FlatList
                key={'#'}
                keyExtractor={item => "#" + item.id}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard  product={item}/>
                )}
                numColumns={2}
                columnWrapperStyle={{ gap: 24 }}
                contentContainerStyle={{  gap: 24 }}
            />
        </View>
    )
}
