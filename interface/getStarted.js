import React from 'react';
import { View, StyleSheet, ImageBackground, StatusBar, Text, TouchableOpacity } from 'react-native';

const GetStarted = ({ navigation }) => {
  const pressHandler = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground
        style={styles.imageBackground} source={require('../assets/tempbg.png')}>
        <View style={styles.details}>
        <Text style={styles.title}>Lorem</Text>
        <Text style={styles.title}>ipsum dolor</Text>
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut sem non erat vehicula dignissim. Morbi eget congue ante, feugiat.
        </Text>

      <TouchableOpacity onPress={pressHandler}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Get Started</Text>
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
  details: {
    flex: 1,
    paddingHorizontal: 40,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  title: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    lineHeight: 25,
    marginTop: 15,
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

export default GetStarted;
