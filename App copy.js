import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; 
import firebase from './firebase/firebase'

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [{
    provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    defaultCountry: 'MX',
    whitelistedCountries: ['MX', '+52'],
    recaptchaParameters: {
      type: 'image', // 'audio'
      size: 'invisible', // 'invisible' or 'compact'
      badge: 'bottomright' //' bottomright' or 'inline' applies to invisible.
    }, 
  }],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export default function App() {
 
  //const dispatch = useDispatch();  
  
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {  
      if( user?.phoneNumber && user?.uid ) console.log(user)
      //dispatch(wrkPersonSession({ telefono: user?.phoneNumber, uit: user?.phoneNumber, uid: user?.uid })); 
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); 
  }, []);

  return (
    <View style={styles.container}> 
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
});
