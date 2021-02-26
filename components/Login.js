import React, {useState} from 'react';

import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native'; 

import { useDispatch } from 'react-redux'; 
   
import * as Google from 'expo-google-app-auth'; 

import { login } from '../acctions/loginActions';

export default function Login() { 
  
  const dispatch = useDispatch();

  const [showSpinner, setShowSpinner] = useState(false);  

  const signInWithGoogleAsync = async () => {
    try {
      setShowSpinner(true);
      const result = await Google.logInAsync({
        androidClientId: '152433093098-5dt7t6440e18bkgo10ghtfpvehe9d7ie.apps.googleusercontent.com', 
        scopes: ['profile', 'email', ],
      });
       
      if (result.type === 'success') {  
        setShowSpinner(false);
        return dispatch(login(result.user));
      } else { 
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };
 
   if (showSpinner) return <ActivityIndicator size="large" style={styles.container}  color="#0000ff"/>

  return (
    <View style={styles.container}> 
      <Text style={styles.titleText}>TOBB APP</Text>
      <Button title="Inicia sesion" onPress={() => signInWithGoogleAsync()} />
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
  }
});
