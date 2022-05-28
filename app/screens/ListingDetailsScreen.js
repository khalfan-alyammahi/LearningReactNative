import React from 'react';

import { View , Image ,StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View >
            <Image style = {styles.image} source={require('../assets/jacket.jpg')}/>
            <View style = {styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
            </View>
                <ListItem 
                    title ="Mosh Hamedani"
                    subTitle="5 Listings"
                    image={require('../assets/mosh.jpg')}/>

            {/* <View style={styles.profileDetailContainer}>
            <Image style={styles.profileImage} source={require('../assets/mosh.jpg')}/>
            <View style ={styles.textsContainer}>
                <AppText style={styles.name}>Mosh Hamedani</AppText>
                <AppText style = {styles.listing}>5 Listing</AppText>
            </View>
            </View> */}

        </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300
    },

    detailsContainer:{
        padding : 20,
    },


    price:{
        color : colors.secondary,
        fontWeight:'bold',
        fontSize:20,
        marginVertical:10,
    },

  
    title:{
        fontSize:25,
        fontWeight:'500'
    },

    userContainer:{
        marginVertical:40
    },

   
})