import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 
import firebase from '../firebase/firebase'
 

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/signedIn',
  signInOptions: [
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,  
  ], 
  callbacks: { 
    signInSuccessWithAuthResult: () => false,
  },
};

export default function Login() {
 
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => user?.uid && console.log(user));
        return () => unregisterAuthObserver(); 
    }, []);

    return (
        <View style={styles.container}> 
            <Text style={styles.titleText}>TOBB APP</Text>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}  />
        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        titleText: {
            fontSize: 20,
            fontWeight: 'bold',
            //paddingBottom: '20px'
        }
});
