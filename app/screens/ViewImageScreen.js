import React from 'react';

import {
    ImageBackground,
    StyleSheet,
    Image,
    View
} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'


import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style = {styles.container}>
            <View style ={styles.closeIcon}>
                <MaterialCommunityIcons name='close' size = {35} color={colors.white} />
            </View>
            <View style = {styles.deleteIcon}>
                <MaterialCommunityIcons name = 'trash-can-outline' size = {35} color={colors.white}  />
            </View>
           
            <Image  style = {styles.background} source = {require('../assets/chair.jpg')}></Image>

        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    background:{
       width :'100%',
       height:'100%',
       resizeMode:'contain',
       justifyContent:'flex-start'
        
    },

   

    closeIcon:{
      
        position:'absolute',
        top : 40,
        left:30
        
    },

    container:{
        flex: 1,
        backgroundColor: colors.black
    },


    

    deleteIcon:{
        position:'absolute',
        top : 40,
        right:30
    },
    
})