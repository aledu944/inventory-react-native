
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { globalStyles } from '../../theme/theme'
import { RegisterForm } from '../../components'

export const RegisterScreen = () => {



    return (
        <ImageBackground source={require('../../assets/bg-auth.png')} style={globalStyles.bgAuth} >
            <SafeAreaView style={{...globalStyles.container, justifyContent:'center'}}>

                <RegisterForm/>

            </SafeAreaView>
        </ImageBackground>
    )
}
