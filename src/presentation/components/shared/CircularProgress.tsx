import React from 'react'
import { View, ActivityIndicator } from 'react-native';
import { globalColors } from '../../theme/theme';

export const CircularProgress = () => {
    return (
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center' }}>
            <ActivityIndicator size={20} color={ globalColors.primary }/>
        </View>
    )
}
