import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Pressable, Text, TextInput, ToastAndroid, View } from 'react-native'

import { useAuth } from '../../hooks';
import { PrimaryButton } from '../shared/PrimaryButton';
import { globalColors, globalStyles } from '../../theme/theme'
import { AuthNavigatorParams } from '../../routes/AuthNavigator';


export const LoginForm = () => {

    const { loginWithEmailAndPassword } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigation = useNavigation<NavigationProp<AuthNavigatorParams>>();


    const handleSubmit = () => {

        if( email.trim() === '' ){
            ToastAndroid.show('Ingrese un correo valido', ToastAndroid.SHORT);
            return;
        }

        if( password.trim() === '' || password.length < 6 ){
            ToastAndroid.show('Contraseña invalida', ToastAndroid.SHORT);
            return;
        }

        loginWithEmailAndPassword(email, password);
        

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
