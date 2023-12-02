import React from 'react'
import { Category } from '../../../domain/models'
import { Image, Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { AppNavigatorParams } from '../../routes/AppNavigator';

interface Props {
    category: Category;
}

export const CategoryCard = ({ category }: Props) => {

    const navigation = useNavigation<NavigationProp<AppNavigatorParams>>();

    const handleNavigate = () => {
        navigation.navigate('Category', { slug: category?.slug });
    }


    return (
        <Pressable onPress={handleNavigate} style={ globalStyles.categoryCard }>
            <Image
                style={{ width: 60, height: 60 }}
                source={{ uri: category.image }}
            />
            <Text style={ globalStyles.title2 }>{ category.name }</Text>
        </Pressable>
    )
}
