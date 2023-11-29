import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PrimaryButton } from '../shared/PrimaryButton';
import { globalColors, globalStyles } from '../../theme/theme';

export const RegisterForm = () => {
    const navigation = useNavigation();

    const handleNavigate = (screen: string) => {
        navigation.navigate(screen as never);
    }
    
    return (
        <View style={ globalStyles.authForm }>
            <Text style={globalStyles.title1}>Crea una cuenta</Text>

            <PrimaryButton label='Registrarse' onPress={() => handleNavigate('Login')} />

            <Pressable onPress={() => handleNavigate('Login')}>
                <Text style={{ color: globalColors.primary }}>¿Ya tienes cuenta? Inicia sesion</Text>
            </Pressable>
        </View>
    )
}
