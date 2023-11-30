import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';

export const SystemScreen = () => {
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://vue-pos-inventory.vercel.app/#/auth/login' }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
