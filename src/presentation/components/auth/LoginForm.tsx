import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Pressable, Text, TextInput, View } from 'react-native'

import { PrimaryButton } from '../shared/PrimaryButton';
import { globalColors, globalStyles } from '../../theme/theme'
import { AuthNavigatorParams } from '../../routes/AuthNavigator';


export const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation<NavigationProp<AuthNavigatorParams>>();


    const handleSubmit = () => {
        console.log({email, password});
    }


    return (
        <View style={globalStyles.authForm}>
            <Text style={globalStyles.title1}>Iniciar Sesion</Text>

            <TextInput
                placeholder='Correo electronico'
                onChangeText={setEmail}
                style={globalStyles.input}
            />

            <TextInput
                placeholder='Contraseña'
                onChangeText={setPassword}
                style={globalStyles.input}
                secureTextEntry
            />


            <PrimaryButton label='Iniciar Sesion' onPress={handleSubmit} />

            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={{ color: globalColors.primary, textAlign: 'center' }}>¿Aun no tiene una cuenta? Registrate</Text>
            </Pressable>
        </View>
    )
}
