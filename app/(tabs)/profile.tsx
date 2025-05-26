import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, CreditCard as Edit2, Award, Calendar, Users, Dumbbell, Trophy } from 'lucide-react-native';
import { mockUserProfile, mockAchievements } from '@/data/mockData';

export default function ProfileScreen() {
  const user = mockUserProfile;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.profileSection}>
          <Image source={{ uri: user.avatar }} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userLocation}>{user.location}</Text>
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{user.workouts}</Text>
                <Text style={styles.statLabel}>Workouts</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{user.following}</Text>
                <Text style={styles.statLabel}>Following</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{user.followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
            </View>
          </View>
          
          <TouchableOpacity style={styles.editProfileButton}>
            <Edit2 size={16} color="#FFFFFF" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.activitySection}>
          <Text style={styles.sectionTitle}>Activity Summary</Text>
          <View style={styles.activityContainer}>
            <View style={styles.activityRow}>
              <View style={[styles.activityBox, { backgroundColor: '#FF4757' }]}>
                <Text style={styles.activityValue}>{user.activity.thisWeek}</Text>
                <Text style={styles.activityLabel}>This Week</Text>
              </View>
              <View style={[styles.activityBox, { backgroundColor: '#4A8CFF' }]}>
                <Text style={styles.activityValue}>{user.activity.thisMonth}</Text>
                <Text style={styles.activityLabel}>This Month</Text>
              </View>
            </View>
            <View style={styles.activityRow}>
              <View style={[styles.activityBox, { backgroundColor: '#FFB74D' }]}>
                <Text style={styles.activityValue}>{user.activity.streak} day</Text>
                <Text style={styles.activityLabel}>Current Streak</Text>
              </View>
              <View style={[styles.activityBox, { backgroundColor: '#66BB6A' }]}>
                <Text style={styles.activityValue}>{user.activity.avgDuration}</Text>
                <Text style={styles.activityLabel}>Avg Workout</Text>
              </View>
            </View>
          </View>
        </View>
        
        <View style={styles.achievementsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.achievementsContainer}
          >
            {mockAchievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementCard}>
                <View 
                  style={[
                    styles.achievementIconContainer,
                    { backgroundColor: achievement.color }
                  ]}
                >
                  <Award size={24} color="#FFFFFF" />
                </View>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>
                  {achievement.description}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Workout Stats</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statGridItem}>
              <Calendar size={20} color="#FF4757" />
              <Text style={styles.statGridValue}>{user.stats.workoutsThisWeek}</Text>
              <Text style={styles.statGridLabel}>This Week</Text>
            </View>
            <View style={styles.statGridItem}>
              <Dumbbell size={20} color="#4A8CFF" />
              <Text style={styles.statGridValue}>{user.stats.totalExercises}</Text>
              <Text style={styles.statGridLabel}>Exercises</Text>
            </View>
            <View style={styles.statGridItem}>
              <Trophy size={20} color="#FFB74D" />
              <Text style={styles.statGridValue}>{user.stats.challengesWon}</Text>
              <Text style={styles.statGridLabel}>Challenges Won</Text>
            </View>
            <View style={styles.statGridItem}>
              <Users size={20} color="#66BB6A" />
              <Text style={styles.statGridValue}>{user.stats.friendsWorkingOut}</Text>
              <Text style={styles.statGridLabel}>Friends Active</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileInfo: {
    alignItems: 'center',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  userLocation: {
    color: '#8A8A8A',
    fontSize: 14,
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#333333',
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    color: '#8A8A8A',
    fontSize: 12,
    marginTop: 2,
  },
  editProfileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF4757',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  activitySection: {
    padding: 16,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  activityContainer: {
    marginBottom: 16,
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  activityBox: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  activityValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  activityLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
  },
  achievementsSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  seeAllText: {
    color: '#FF4757',
    fontSize: 14,
  },
  achievementsContainer: {
    paddingBottom: 16,
    paddingRight: 16,
  },
  achievementCard: {
    width: 140,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
  },
  achievementIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  achievementTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  achievementDescription: {
    color: '#8A8A8A',
    fontSize: 12,
  },
  statsSection: {
    padding: 16,
    paddingBottom: 32,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statGridItem: {
    width: '48%',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  statGridValue: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
  },
  statGridLabel: {
    color: '#8A8A8A',
    fontSize: 12,
  },
});