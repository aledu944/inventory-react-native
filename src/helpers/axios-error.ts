import axios from "axios"
import { ToastAndroid } from "react-native"

export const axiosError = (error: unknown) => {
    if( axios.isAxiosError(error) ){
        ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT );
    }
}