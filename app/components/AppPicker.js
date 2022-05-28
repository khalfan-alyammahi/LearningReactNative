import React, { useState } from 'react';
import { TextInput, View , StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList, TouchableOpacity} from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen';

import defaultStyles from '../config/style'
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
import colors from '../config/colors';


function AppPicker({ icon , items , onSelectItem ,  placeholder , selectedItem }) {
    const [modalVisible , setModalVisible] =useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
               { icon && <MaterialCommunityIcons 
                    name ={icon} 
                    size={20} 
                    color = {defaultStyles.colors.medium} 
                    style={styles.icon}
                />}
                <AppText style = {styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons 
                    name ='chevron-down' 
                    size={20} 
                    color = {defaultStyles.colors.medium} 
                />
            </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    {/* <TouchableOpacity style = {{backgroundColor : colors.light , borderRadius: 10 ,width:'50%' , alignSelf:'center'}}>
                        <Button color={colors.medium} title ='Close' onPress={() => setModalVisible(false)}/>
                    </TouchableOpacity> */}
                    <Button  title ='Close' onPress={() => setModalVisible(false)}/>
                    <FlatList
                        data={items}
                        keyExtractor = {item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
            
        </>
    );
}

export default AppPicker;

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

  
    text:{
        flex:1,
    }

    // textInput:{
    //     color:colors.dark,
    //     fontSize:18,
    //     fontFamily : Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        
    // },

})