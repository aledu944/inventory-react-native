
import { useNavigation, useRoute } from '@react-navigation/native'
import { useEffect } from 'react';
import { Text, View } from 'react-native'

export const ProductScreen = () => {

    const navigation = useNavigation();
    const { params } = useRoute();

    
    useEffect(() => {
        navigation.setOptions({
            title: 'qds'
        })
    }, [navigation])
    

    return (
        <View>
            <Text>ProductScreen</Text>
        </View>
    )
}
