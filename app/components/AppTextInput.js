import React from 'react';
import { TextInput, View , StyleSheet, Platform , TouchableWithoutFeedback} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import defaultStyles from '../config/style'


function AppTextInput({ icon  , ...otherProps}) {
    return (

            <View style={styles.container}>
                { icon && <MaterialCommunityIcons name ={icon} size={20} color = {defaultStyles.colors.medium} style={styles.icon}/>}
                <TextInput style = {defaultStyles.text} {...otherProps}/>
            </View>       
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    container:{
        backgroundColor : defaultStyles.colors.light,
        borderRadius:25,
        flexDirection: 'row',
        width:'100%',
        padding : 15,
        marginVertical: 10,
    },
    
    icon:{
        marginTop: Platform.OS === 'android' ? 4 : 0,
        marginRight : 10,
    },

    // textInput:{
    //     color:colors.dark,
    //     fontSize:18,
    //     fontFamily : Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        
    // },

})