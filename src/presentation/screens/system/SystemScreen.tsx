import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export const SystemScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <>

            <StatusBar style='dark'/>
            <WebView
                style={{ ...styles.container, marginTop: top }}
                source={{ uri: 'https://vue-pos-inventory.vercel.app/#/auth/login' }}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
