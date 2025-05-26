import { Tabs } from 'expo-router';
import { StyleSheet, Platform } from 'react-native';
import { Home, Dumbbell, Trophy, User } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const ACTIVE_COLOR = '#FF4757';
const INACTIVE_COLOR = '#8A8A8A';

export default function TabLayout() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: ACTIVE_COLOR,
          tabBarInactiveTintColor: INACTIVE_COLOR,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Feed',
            tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="workouts"
          options={{
            title: 'Workouts',
            tabBarIcon: ({ color, size }) => <Dumbbell size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="challenges"
          options={{
            title: 'Challenges',
            tabBarIcon: ({ color, size }) => <Trophy size={size} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  tabBar: {
    backgroundColor: '#1A1A1A',
    borderTopColor: '#333333',
    paddingTop: 8,
    height: Platform.OS === 'ios' ? 70 : 64,
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
});