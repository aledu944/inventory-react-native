import { StyleSheet } from "react-native";



export const globalColors = {
    primary: '#17B39C',
}

export const globalStyles = StyleSheet.create({
    // REUSABLE
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    // COMPONENTS
    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 10,
        padding: 10,
    },

    textButton: {
        textAlign: 'center',
    },

    // AUTH
    bgAuth: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    authForm: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        gap: 20
    }
})