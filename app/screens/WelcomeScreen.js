import React from 'react';

import {View , StyleSheet , Text , ImageBackground , Image , TouchableOpacity} from 'react-native';
import AppButton from '../components/AppButton';


import colors from '../config/colors';







function WelcomeScreen(props) {
    return (
        <ImageBackground 
            blurRadius={10}
            style = {styles.background} 
            source={require('../assets/background.jpg')}
        > 
            <View style = {styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style = {styles.logo}></Image>
                <Text style ={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            
            <View style = {styles.buttonsContainer}>
                    <AppButton title='Login'/>
                    <AppButton title='Register' color = 'secondary'/>
            </View>

            
        </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center', 
    },

    buttonsContainer:{
        padding : 20,
        width:'100%'
    },


    logo:{
        width:100,
        height:100,
    },
    
    logoContainer:{
        alignItems:'center',
        position:'absolute',
        top:70,
        
    },

    tagline:{
        fontSize:25,
        fontWeight:'600',
        paddingVertical:20,
    },

  
    
    
})