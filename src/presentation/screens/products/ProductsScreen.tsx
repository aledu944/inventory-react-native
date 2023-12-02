import { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { FlatList, ScrollView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { globalStyles } from '../../theme/theme';
import { Category, Product } from '../../../domain/models';
import { productsRepository, categoryRepository } from '../../../domain';
import { CategoryCard, CategoryList, CircularProgress, ProductCard, SearchInputProduct } from '../../components';

export const ProductsScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);

    const getAllProducts = async () => {
        setIsLoading(true);
        const token = await AsyncStorage.getItem('AUTH_TOKEN');

        const categoriesPromise = await categoryRepository.findAllCategories();
        const productsPromise = await productsRepository.findMany(token);

        const responses = await Promise.all([categoriesPromise, productsPromise]);

        setCategories(responses[0]);
        setProducts(responses[1]);

        setIsLoading(false);
    }

    useEffect(() => {
        getAllProducts();
    }, [])


    if (isLoading) {
        return <CircularProgress />
    }


    return (
        <View style={{ flex: 1, ...globalStyles.container }}>
            <StatusBar style='light' />
            <FlatList
                key={'#'}
                keyExtractor={item => "#" + item.id}
                data={products}
                renderItem={({ item }) => (
                    <ProductCard product={item} />
                )}
                ListHeaderComponentStyle={{ gap: 10 }}
                ListHeaderComponent={
                    <>
                        <SearchInputProduct />
                        <CategoryList categories={categories} />
                        <View>
                            <Text style={{ ...globalStyles.title1 }}>Productos mas populares</Text>
                            <Text>Encuentra el producto de tu interes</Text>
                        </View>

                    </>
                }
                showsVerticalScrollIndicator={ false }
                numColumns={2}
                columnWrapperStyle={{ gap: 24 }}
                contentContainerStyle={{ gap: 24, paddingBottom: 20, paddingHorizontal: 10 }}
            />
        </View>
    )
}