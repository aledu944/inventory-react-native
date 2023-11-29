
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { PrimaryButton } from '../shared/PrimaryButton';
import { globalColors, globalStyles } from '../../theme/theme'

export const LoginForm = () => {

    const navigation = useNavigation();

    const handleNavigate = (screen: string) => {
        navigation.navigate(screen as never);
    }


    return (
        <View style={ globalStyles.authForm }>
            <Text style={globalStyles.title1}>Iniciar Sesion</Text>

            <PrimaryButton label='Iniciar Sesion' onPress={() => handleNavigate('Register')} />

            <Pressable onPress={() => handleNavigate('Register')}>
                <Text style={{ color: globalColors.primary }}>Registrate</Text>
            </Pressable>
        </View>
    )
}
