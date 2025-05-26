import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { MessageSquare, Heart } from 'lucide-react-native';
import Header from '@/components/Header';
import { mockFeedData } from '@/data/mockData';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title="Activity Feed" />
      <ScrollView style={styles.scrollView}>
        {mockFeedData.map((post) => (
          <View key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
              <View style={styles.postHeaderText}>
                <Text style={styles.userName}>{post.userName}</Text>
                <Text style={styles.timestamp}>{post.timestamp}</Text>
              </View>
            </View>
            
            <Text style={styles.workoutTitle}>{post.workoutTitle}</Text>
            <Text style={styles.description}>{post.description}</Text>
            
            {post.workoutImage && (
              <Image 
                source={{ uri: post.workoutImage }} 
                style={styles.workoutImage} 
                resizeMode="cover"
              />
            )}
            
            <View style={styles.stats}>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Duration</Text>
                <Text style={styles.statValue}>{post.duration}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Exercises</Text>
                <Text style={styles.statValue}>{post.exercises}</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statLabel}>Calories</Text>
                <Text style={styles.statValue}>{post.calories}</Text>
              </View>
            </View>
            
            <View style={styles.actions}>
              <TouchableOpacity style={styles.actionButton}>
                <Heart size={20} color="#8A8A8A" />
                <Text style={styles.actionText}>{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <MessageSquare size={20} color="#8A8A8A" />
                <Text style={styles.actionText}>{post.comments}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  postCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  postHeaderText: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  timestamp: {
    color: '#8A8A8A',
    fontSize: 12,
    marginTop: 2,
  },
  workoutTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  description: {
    color: '#D1D1D1',
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  workoutImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    color: '#8A8A8A',
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    color: '#8A8A8A',
    fontSize: 14,
    marginLeft: 6,
  },
});