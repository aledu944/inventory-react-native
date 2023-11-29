
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { globalStyles } from '../../theme/theme';
import { StatusBar } from 'expo-status-bar';
import { LoginForm } from '../../components';


export const LoginScreen = () => {


    return (
        <ImageBackground source={require('../../assets/bg-auth.png')} style={globalStyles.bgAuth} >
            <StatusBar style='auto'/>
            <SafeAreaView style={{...globalStyles.container, justifyContent:'center'}}>

                <LoginForm/>

            </SafeAreaView>
        </ImageBackground>
    )
}
