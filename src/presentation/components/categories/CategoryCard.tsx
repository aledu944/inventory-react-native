import React from 'react'
import { Category } from '../../../domain/models'
import { Image, Text, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
    category: Category;
}

export const CategoryCard = ({ category }: Props) => {
    return (
        <View style={ globalStyles.categoryCard }>
            <Image
                style={{ width: 60, height: 60 }}
                source={{ uri: category.image }}
            />
            <Text style={ globalStyles.title2 }>{ category.name }</Text>
        </View>
    )
}
