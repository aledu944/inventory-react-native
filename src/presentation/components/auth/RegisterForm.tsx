import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { PrimaryButton } from '../shared/PrimaryButton';
import { globalColors, globalStyles } from '../../theme/theme';
import { AuthNavigatorParams } from '../../routes/AuthNavigator';

export const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const navigation = useNavigation<NavigationProp<AuthNavigatorParams>>();

    const handleSubmit = () => {

    }

    return (
        <View style={globalStyles.authForm}>
            <Text style={globalStyles.title1}>Crea una cuenta</Text>


            <TextInput
                placeholder='Ingresa tus nombres'
                onChangeText={setName}
                style={globalStyles.input}
            />

            <TextInput
                placeholder='Ingresa tu apellido'
                onChangeText={setLastname}
                style={globalStyles.input}
            />

            <TextInput
                placeholder='Correo electronico'
                onChangeText={setEmail}
                style={globalStyles.input}
            />

            <TextInput
                placeholder='Contraseña'
                onChangeText={setPassword}
                style={globalStyles.input}
            />

            <TextInput
                placeholder='Confirmar contraseña'
                onChangeText={setPasswordConfirmation}
                style={globalStyles.input}
                secureTextEntry
            />

            <PrimaryButton label='Registrarse' onPress={handleSubmit} />

            <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: globalColors.primary }}>¿Ya tienes cuenta? Inicia sesion</Text>
            </Pressable>
        </View>
    )
}
