import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const EmailAuthenticator  = ({ navigation }) => {
    const [code, setCode] = useState('');
    const codeInputs = useRef([]);
  
    const handleCodeChange = (value, index) => {
      setCode((prevCode) => {
        const updatedCode = prevCode.split('');
        updatedCode[index] = value;
        return updatedCode.join('');
      });
  
      if (value !== '') {
        // Move focus to the next input field
        if (index < codeInputs.current.length - 1) {
          codeInputs.current[index + 1].focus();
        }
      }
    };
  
    const handleSubmit = () => {
      // Handle code submission logic here
      console.log('Submitted code:', code);
    };
  
    const renderCodeInputs = () => {
      const codeArray = code.split('');
  
      return Array.from({ length: 6 }, (_, index) => (
        <TextInput
          key={index}
          style={[styles.codeInput, codeArray[index] && styles.codeInputFilled]}
          onChangeText={(value) => handleCodeChange(value, index)}
          value={codeArray[index]}
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (codeInputs.current[index] = ref)}
        />
      ));
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter 6-digit Code</Text>
        <View style={styles.codeContainer}>{renderCodeInputs()}</View>
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    codeContainer: {
      flexDirection: 'row',
    },
    codeInput: {
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      fontSize: 18,
      paddingHorizontal: 10,
      width: 40,
      height: 40,
      marginHorizontal: 5,
      textAlign: 'center',
    },
    codeInputFilled: {
      backgroundColor: '#F5F5F5',
    },
    submitButton: {
      marginTop: 20,
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
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
  });

export default EmailAuthenticator;
