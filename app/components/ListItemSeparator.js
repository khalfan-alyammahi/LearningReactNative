import React from 'react';

import { StyleSheet , View} from 'react-native';
import colors from '../config/colors';

function ListItemSeparatorComponant() {
    return (
        <View style ={styles.separator}></View> 
    );
}

export default ListItemSeparatorComponant;

const styles = StyleSheet.create({
    separator:{
        width : '100%',
         height : 1 , 
         backgroundColor : colors.light,
    }
})