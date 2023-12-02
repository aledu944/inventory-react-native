import React from 'react'
import { Text, View, FlatList } from 'react-native'

import { CategoryCard } from './CategoryCard'
import { globalStyles } from '../../theme/theme';
import { Category } from '../../../domain/models';


interface Props {
    categories: Category[]
}

export const CategoryList = ({ categories }: Props) => {
    return (
        <View>
            <View>
                <Text style={{ ...globalStyles.title1 }}>Categorias</Text>
                <Text>Encuntra las categorias disponibles</Text>
            </View>

            <FlatList
                horizontal
                data={categories}
                renderItem={({ item }) => (
                    <CategoryCard category={item} />
                )}
                keyExtractor={item => "#" + item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 24, padding: 10 }}
            />
        </View>
    )
}
