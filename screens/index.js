import React, {useState, useEffect} from 'react';
import { StyleSheet, ActivityIndicator, } from 'react-native';
 
import { useSelector } from 'react-redux'; 

import Login from '../components/Login'; 
import List from '../components/List';
 
 
export default function Screens() {

    const {isLogin} = useSelector((state) => state?.auth);  

    const [ showSpinner, setShowSpinner ] = useState(true);  
    
    useEffect(() => { 
        let isSubscribed = setTimeout(() => setShowSpinner(false), 1500);
        return () => clearTimeout(isSubscribed);
    },[isLogin, showSpinner]);    

    if (showSpinner) return <ActivityIndicator size="large" style={styles.container}  color="#0000ff"/>
    
    return !isLogin ? <Login/> : <List />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
