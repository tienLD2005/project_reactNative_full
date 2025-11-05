import { storage } from '@/utils/storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    const data = await storage.getUserData();
    setUserData(data);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            await storage.clearAll();
            router.replace('/(auth)/login');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>C</Text>
        </View>
        <Text style={styles.brandText}>live Green</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back! 👋</Text>

        {userData && (
          <View style={styles.userInfoContainer}>
            <Text style={styles.sectionTitle}>Your Profile</Text>
            <View style={styles.infoCard}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Name:</Text>
                <Text style={styles.infoValue}>{userData.name}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Email:</Text>
                <Text style={styles.infoValue}>{userData.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>User ID:</Text>
                <Text style={styles.infoValue}>{userData.id}</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Live Green Hotel Booking</Text>
          <Text style={styles.sectionText}>
            Welcome to Live Green - Your trusted hotel booking companion.
            Explore thousands of hotels worldwide and book with confidence.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <Text style={styles.sectionText}>
            • Easy hotel search and booking{'\n'}
            • Secure payment system{'\n'}
            • 24/7 customer support{'\n'}
            • Best price guarantee{'\n'}
            • Instant booking confirmation
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  logoCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: '#5E72E4',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '300',
    color: '#5E72E4',
    fontFamily: 'serif',
  },
  brandText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#5E72E4',
    fontFamily: 'serif',
    letterSpacing: 1,
  },
  content: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 24,
  },
  userInfoContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 12,
  },
  infoCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  section: {
    marginBottom: 24,
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 22,
  },
  logoutButton: {
    backgroundColor: '#FF5252',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
