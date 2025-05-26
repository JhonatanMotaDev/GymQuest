import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Plus, Calendar, ClipboardList } from 'lucide-react-native';
import Header from '@/components/Header';
import WorkoutCard from '@/components/WorkoutCard';
import { mockWorkouts } from '@/data/mockData';

export default function WorkoutsScreen() {
  const [activeTab, setActiveTab] = useState('recent');

  return (
    <View style={styles.container}>
      <Header title="Workouts" />
      
      <View style={styles.tabs}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'recent' && styles.activeTab]} 
          onPress={() => setActiveTab('recent')}
        >
          <ClipboardList 
            size={18} 
            color={activeTab === 'recent' ? '#FF4757' : '#8A8A8A'} 
            style={styles.tabIcon} 
          />
          <Text style={[styles.tabText, activeTab === 'recent' && styles.activeTabText]}>
            Recent
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'scheduled' && styles.activeTab]} 
          onPress={() => setActiveTab('scheduled')}
        >
          <Calendar 
            size={18} 
            color={activeTab === 'scheduled' ? '#FF4757' : '#8A8A8A'} 
            style={styles.tabIcon} 
          />
          <Text style={[styles.tabText, activeTab === 'scheduled' && styles.activeTabText]}>
            Scheduled
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {activeTab === 'recent' ? (
          mockWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyStateText}>No scheduled workouts</Text>
            <Text style={styles.emptyStateSubtext}>
              Plan your next workouts ahead of time
            </Text>
          </View>
        )}
      </ScrollView>
      
      <TouchableOpacity style={styles.fab}>
        <Plus size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF4757',
  },
  tabIcon: {
    marginRight: 6,
  },
  tabText: {
    color: '#8A8A8A',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyStateText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    color: '#8A8A8A',
    fontSize: 14,
    textAlign: 'center',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF4757',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
});