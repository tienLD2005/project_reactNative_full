import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface GradientButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    colors?: string[];
}

export const GradientButton: React.FC<GradientButtonProps> = ({
    title,
    onPress,
    loading = false,
    disabled = false,
    style,
    colors = ['#5E72E4', '#825EE4'],
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={disabled ? ['#CCCCCC', '#999999'] : colors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                {loading ? (
                    <ActivityIndicator color="#FFFFFF" />
                ) : (
                    <Text style={styles.text}>{title}</Text>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        overflow: 'hidden',
    },
    gradient: {
        paddingVertical: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});

