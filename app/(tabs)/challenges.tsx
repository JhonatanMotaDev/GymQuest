import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Plus, Users, Trophy, Calendar } from 'lucide-react-native';
import Header from '@/components/Header';
import { mockChallenges } from '@/data/mockData';

export default function ChallengesScreen() {
  return (
    <View style={styles.container}>
      <Header title="Challenges" />
      
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>3</Text>
          <Text style={styles.statLabel}>Active</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Won</Text>
        </View>
      </View>
      
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Active Challenges</Text>
        <TouchableOpacity>
          <Text style={styles.sectionAction}>See All</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.scrollView}>
        {mockChallenges.map(challenge => (
          <TouchableOpacity key={challenge.id} style={styles.challengeCard}>
            <View style={styles.challengeHeader}>
              <View style={styles.challengeBadge}>
                <Trophy size={16} color="#FFFFFF" />
              </View>
              <Text style={styles.challengeType}>{challenge.type}</Text>
              {challenge.isNew && (
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>NEW</Text>
                </View>
              )}
            </View>
            
            <Text style={styles.challengeName}>{challenge.name}</Text>
            <Text style={styles.challengeDescription}>{challenge.description}</Text>
            
            <View style={styles.challengeMeta}>
              <View style={styles.metaItem}>
                <Calendar size={16} color="#8A8A8A" />
                <Text style={styles.metaText}>{challenge.duration}</Text>
              </View>
              <View style={styles.metaItem}>
                <Users size={16} color="#8A8A8A" />
                <Text style={styles.metaText}>{challenge.participants} participants</Text>
              </View>
            </View>
            
            <View style={styles.participants}>
              {challenge.participantAvatars.map((avatar, index) => (
                <Image 
                  key={index}
                  source={{ uri: avatar }} 
                  style={[
                    styles.participantAvatar, 
                    { marginLeft: index > 0 ? -10 : 0 }
                  ]} 
                />
              ))}
              {challenge.participantAvatars.length < challenge.participants && (
                <View style={styles.moreParticipants}>
                  <Text style={styles.moreParticipantsText}>
                    +{challenge.participants - challenge.participantAvatars.length}
                  </Text>
                </View>
              )}
            </View>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressLabel}>
                <Text style={styles.progressText}>Your progress</Text>
                <Text style={styles.progressPercentage}>{challenge.progress}%</Text>
              </View>
              <View style={styles.progressBar}>
                <View 
                  style={[styles.progressFill, { width: `${challenge.progress}%` }]} 
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  statLabel: {
    color: '#8A8A8A',
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  sectionAction: {
    color: '#FF4757',
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  challengeCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  challengeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  challengeBadge: {
    backgroundColor: '#FF4757',
    borderRadius: 4,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  challengeType: {
    color: '#B0B0B0',
    fontSize: 14,
    flex: 1,
  },
  newBadge: {
    backgroundColor: '#4A8CFF',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  newBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },
  challengeName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  challengeDescription: {
    color: '#D1D1D1',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  challengeMeta: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    color: '#8A8A8A',
    fontSize: 12,
    marginLeft: 4,
  },
  participants: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  participantAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#1E1E1E',
  },
  moreParticipants: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -10,
  },
  moreParticipantsText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  progressContainer: {
    marginTop: 8,
  },
  progressLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressText: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  progressPercentage: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#333333',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FF4757',
    borderRadius: 3,
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