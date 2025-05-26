import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Account</Text>
        <View style={{ width: 40 }} />
      </View>
      
      <ScrollView style={styles.formContainer}>
        <Text style={styles.title}>Join the community</Text>
        <Text style={styles.subtitle}>Create an account to track workouts and challenge friends</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#8A8A8A"
            value={name}
            onChangeText={setName}
          />
        </View>
        
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
            placeholder="Create a password"
            placeholderTextColor="#8A8A8A"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Text style={styles.passwordHint}>
            Password must be at least 8 characters long
          </Text>
        </View>
        
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>
            By signing up, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
        
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Create Account</Text>
        </TouchableOpacity>
        
        <View style={styles.orContainer}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>
        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <Link href="/login" asChild>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </Link>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  formContainer: {
    flex: 1,
    padding: 24,
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
  passwordHint: {
    color: '#8A8A8A',
    fontSize: 12,
    marginTop: 8,
  },
  termsContainer: {
    marginBottom: 24,
  },
  termsText: {
    color: '#8A8A8A',
    fontSize: 14,
    lineHeight: 20,
  },
  termsLink: {
    color: '#FF4757',
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: '#FF4757',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
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
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  loginText: {
    color: '#8A8A8A',
    fontSize: 14,
  },
  loginLink: {
    color: '#FF4757',
    fontSize: 14,
    fontWeight: '600',
  },
});