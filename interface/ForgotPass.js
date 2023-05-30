import React, { useState }  from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Text, TextInput, TouchableOpacity } from 'react-native';

const ForgotPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    
    const handlePass = () => {
        navigation.navigate('EmailAuthenticator'); //for the meantime
      };

    return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
    <ImageBackground style={styles.imageBackground} source={require('../assets/icon.png')}>
    <View style={styles.details}>
    <Text style = {styles.title}>Forgot Your Password</Text>

    <TextInput
        style={styles.input}
        placeholder="Input your Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        />

    <TouchableOpacity onPress={handlePass}>
        <View style={styles.btn}>
        <Text style={styles.btnText}>Continue</Text>
        </View>
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
    title: {
      color: 'black',
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    details: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 40,
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
  

export default ForgotPassword;