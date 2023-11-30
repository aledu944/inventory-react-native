
import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { productsRepository } from '../../../domain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../../../domain/models';
import { globalStyles } from '../../theme/theme';
import { ProductCard } from '../../components';

export const ProductsScreen = () => {
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
        <View style={ globalStyles.container }>
            <StatusBar  style='light'/>
            <FlatList
                key={'#'}
                keyExtractor={item => "#" + item.id}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard  product={item}/>
                )}
                numColumns={2}
                columnWrapperStyle={{ gap: 20 }}
                contentContainerStyle={{ gap: 20, justifyContent: 'center', alignItems: 'center' }}
            />
        </View>
    )
}
