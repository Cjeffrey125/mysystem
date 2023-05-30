import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { iconbutton } from '../components/layout';

const Channel = ({ navigation }) => {
    const homeButtonPress = () => {
        navigation.navigate('Dashboard');
    };
    const favoriteButtonPress = () => {
        navigation.navigate('Favorite');
    };
    const ticketButtonPress = () => {
        navigation.navigate('Ticket');
    };
    const channelButtonPress = () => {
        navigation.navigate('Channel');
    };
    const profileButtonPress = () => {
        navigation.navigate('Profile');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the channel</Text>
            <View style={styles.iconbuttonContainer}>
                <TouchableOpacity onPress={homeButtonPress} style={iconbutton.button}>
                    <Text style={iconbutton.buttonText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={favoriteButtonPress} style={iconbutton.button}>
                    <Text style={iconbutton.buttonText}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ticketButtonPress} style={iconbutton.button}>
                    <Text style={iconbutton.buttonText}>Ticket</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={channelButtonPress} style={iconbutton.button}>
                    <Text style={iconbutton.buttonText}>Channel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={profileButtonPress} style={iconbutton.button}>
                    <Text style={iconbutton.buttonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20, // Added paddingBottom to push the buttons at the bottom
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20, // Added marginBottom for spacing
    },
    iconbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: '#f5f5f5',
    },
});

export default Channel;
