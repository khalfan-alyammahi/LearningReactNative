import React from 'react';

import { View , Text , Image , StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({title , subTitle , image }) {
    return (
        <View style ={styles.card}>
            <Image style = {styles.image} source = {image}/>
            <View style = {styles.detailsConatainer}>
                <AppText style = {styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card:{
        borderRadius : 15,
        backgroundColor:colors.white,
        overflow:'hidden',
        marginBottom:20
    },
    
    detailsConatainer:{
        padding : 20,
    },
    
    image:{
        width:'100%',
        height:200,
        
        
    },

    subTitle:{
        color: colors.secondary,
        fontWeight:'bold',
    },

    title:{
        marginBottom:7,
    },


    
})