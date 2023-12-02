import { StyleSheet } from "react-native";



export const globalColors = {
    primary: '#17B39C',

    dark: {
        100: 'rgba(0,0,0,0.05)',
        200: 'rgba(0,0,0,0.1)',
        500: 'rgba(0,0,0,0.4)',
        700: 'rgba(0,0,0,0.6)',
    },

    borderColor: 'rgba(0,0,0,0.2)',
}

const globalShadows = StyleSheet.create({
    shadow_sm: {
        shadowColor: globalColors.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },

    shadow_md: {
        shadowColor: globalColors.primary,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
})

export const globalStyles = StyleSheet.create({
    // REUSABLE
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    title2: {
        fontSize: 16,
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

    input: {
        borderWidth: 1,
        borderColor: globalColors.borderColor,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
    },

    searchInput: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: globalColors.dark[100],
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,  
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
    },

    // PRODUCTS
    productCard: {
        // maxWidth: 150,
        width: '47%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        gap: 10,
        ...globalShadows.shadow_md
    },

    // CATEGORIES
    categoryCard: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        ...globalShadows.shadow_sm,
    }

    
})