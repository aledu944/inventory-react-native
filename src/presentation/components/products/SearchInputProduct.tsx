import React from 'react'
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { globalStyles } from '../../theme/theme';

export const SearchInputProduct = () => {
    return (
        <View style={ globalStyles.searchInput }>
            <TextInput
                placeholder='Buscar productos'
            />
            <Icon name="search" size={ 16 }/>
        </View>
    )
}
