import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

interface LoadingOverlayProps {
    visible: boolean;
    message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    visible,
    message = 'Loading...'
}) => {
    if (!visible) return null;

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#5E72E4" />
                <Text style={styles.message}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 30,
        alignItems: 'center',
        minWidth: 150,
    },
    message: {
        marginTop: 16,
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: '500',
    },
});

