import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, StatusBar} from 'react-native';

const SignUpScreen  = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic
    console.log('Sign Up:', { firstName, lastName, age, birthday, email });
    navigation.navigate('Login'); //for the meantime
  };

  const login = () => {
    navigation.navigate('Login'); //for the meantime
  };

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
    <ImageBackground style={styles.imageBackground} source={require('../assets/icon.png')}>
      <View style={styles.details}>
      <Text style ={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        onChangeText={(text) => setBirthday(text)}
        value={birthday}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
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
      
      <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Sign Up</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={login}>
          <Text>Already have an Account? <Text style={styles.forgotPasswordText}>Login</Text>
          </Text>
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

export default SignUpScreen;
