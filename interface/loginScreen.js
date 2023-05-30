import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';
import ForgotPassword from './ForgotPass';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic
    console.log('Login:', { username, password });
    navigation.navigate('Dashboard');
  };

  const forgotPass = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground style={styles.imageBackground} source={require('../assets/icon.png')}>
        <View style={styles.details}>
          <Text style ={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />

        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity onPress={forgotPass}>
            <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'black',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
