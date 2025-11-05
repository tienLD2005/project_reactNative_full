import { storage } from '@/utils/storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
    const router = useRouter();

    useEffect(() => {
        const checkOnboarding = async () => {
            // Simulate loading time
            await new Promise((resolve) => setTimeout(resolve, 2500));

            const hasSeenOnboarding = await storage.hasSeenOnboarding();
            const token = await storage.getToken();

            if (token) {
                // User is logged in, go to main app
                router.replace('/(tabs)');
            } else if (hasSeenOnboarding) {
                // User has seen onboarding, go to login
                router.replace('/(auth)/login');
            } else {
                // First time user, show onboarding
                router.replace('/onboarding');
            }
        };

        checkOnboarding();
    }, []);

    return (
        <LinearGradient
            colors={['#E8F5E9', '#FFFFFF', '#E8F5E9']}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>C</Text>
                </View>
                <Text style={styles.brandText}>live Green</Text>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'transparent',
        borderWidth: 4,
        borderColor: '#5E72E4',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    logoText: {
        fontSize: 60,
        fontWeight: '300',
        color: '#5E72E4',
        fontFamily: 'serif',
    },
    brandText: {
        fontSize: 48,
        fontWeight: '400',
        color: '#5E72E4',
        fontFamily: 'serif',
        letterSpacing: 2,
    },
});

