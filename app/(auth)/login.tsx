import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=400' }}
          style={styles.backgroundImage}
        />
        <View style={styles.logoOverlay}>
          <Text style={styles.logoText}>GymRats</Text>
          <Text style={styles.tagline}>Train together. Win together.</Text>
        </View>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue your fitness journey</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#8A8A8A"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#8A8A8A"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Link href="/signup" asChild>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logoContainer: {
    height: '35%',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  logoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
    marginBottom: 8,
  },
  tagline: {
    color: '#FFFFFF',
    fontSize: 16,
    opacity: 0.8,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    paddingTop: 32,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#8A8A8A',
    fontSize: 14,
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#FF4757',
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#FF4757',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#333333',
  },
  orText: {
    color: '#8A8A8A',
    fontSize: 14,
    marginHorizontal: 16,
  },
  socialButton: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  socialButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    color: '#8A8A8A',
    fontSize: 14,
  },
  signupLink: {
    color: '#FF4757',
    fontSize: 14,
    fontWeight: '600',
  },
});