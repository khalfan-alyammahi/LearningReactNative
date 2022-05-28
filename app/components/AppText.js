import React from 'react';

import { Text } from 'react-native';

import defaulStyles from '../config/style'



function AppText({children , style}) {
    return  <Text style={[defaulStyles.text , style]}>{children}</Text>
    
}

export default AppText;


// const styles = StyleSheet.create({
//     // text:{
//     //     fontSize:18,
//     //     fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
//     // }
// })

