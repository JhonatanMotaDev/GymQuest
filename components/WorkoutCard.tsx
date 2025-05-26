import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Clock, Dumbbell, Flame } from 'lucide-react-native';

interface Workout {
  id: string;
  title: string;
  type: string;
  date: string;
  duration: string;
  exercises: number;
  calories: number;
}

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <View style={styles.typeBadge}>
          <Text style={styles.typeText}>{workout.type}</Text>
        </View>
        <Text style={styles.date}>{workout.date}</Text>
      </View>
      
      <Text style={styles.title}>{workout.title}</Text>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Clock size={16} color="#8A8A8A" style={styles.detailIcon} />
          <Text style={styles.detailText}>{workout.duration}</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Dumbbell size={16} color="#8A8A8A" style={styles.detailIcon} />
          <Text style={styles.detailText}>{workout.exercises} exercises</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Flame size={16} color="#8A8A8A" style={styles.detailIcon} />
          <Text style={styles.detailText}>{workout.calories} cal</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  typeBadge: {
    backgroundColor: '#FF4757',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  date: {
    color: '#8A8A8A',
    fontSize: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailIcon: {
    marginRight: 6,
  },
  detailText: {
    color: '#B0B0B0',
    fontSize: 14,
  },
});