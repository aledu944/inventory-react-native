import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';


import { categoryRepository } from '../../../domain';
import { FullCategory } from '../../../domain/models';
import { AppNavigatorParams } from '../../routes/AppNavigator';
import { CircularProgress, ProductCard, SearchInputProduct } from '../../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalColors, globalStyles } from '../../theme/theme';

export const CategoryScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [category, setCategory] = useState<FullCategory>({} as FullCategory)

    const { slug } = useRoute<RouteProp<AppNavigatorParams, 'Category'>>().params;


    const getCategoryDetails = async () => {
        setIsLoading(true);
        const response = await categoryRepository.findCategoryBySlug(slug);
        setCategory(response);
        setIsLoading(false);
    }

    useEffect(() => {
        getCategoryDetails();
    }, [slug])



    if (isLoading) {
        return <CircularProgress />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{...globalStyles.container, gap: 20}}>
                <SearchInputProduct />
                <View>
                    <Text style={globalStyles.title1}>{category?.name}</Text>
                    <Text style={{ color: globalColors.dark[500] }}>{category?.description}</Text>
                </View>
                <FlatList
                    key={'#'}
                    keyExtractor={item => "#" + item.id}
                    data={category?.products}
                    renderItem={({ item }) => (
                        <ProductCard product={item} />
                    )}

                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    columnWrapperStyle={{ gap: 24 }}
                    contentContainerStyle={{ gap: 24, paddingBottom: 20, paddingHorizontal: 10 }}
                />
            </View>
        </SafeAreaView>
    )
}
