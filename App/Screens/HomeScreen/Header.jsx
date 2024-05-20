import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function Header() {
    const {user, isLoading}=useUser();
  return user&&(
    <View style={styles.container}>
    {/* profile section */}
     <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
            <Image source={{uri:user?.imageUrl}}
            style={styles.userImage}
            />
            <View>
                <Text style={{color:Colors.WHITE}}>Welcome,</Text>
                <Text style={{color:Colors.WHITE, fontSize:16,fontFamily:'outfit-bold'}}>{user?.fullName}</Text>
            </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color={Colors.WHITE} />
     </View>
     {/* Search Bar section */}
        <View style={styles.searchBarContainer}>
            <TextInput placeholder='Search' style={styles.textInput}/>
            <FontAwesome name="search" size={24} color={Colors.PRIMARYCOLOR} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        paddingTop:25,
        backgroundColor:Colors.PRIMARYCOLOR,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10,
        backgroundColor:Colors.WHITE,
        marginBottom:10,
        borderRadius:10,
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.WHITE,
        borderRadius:8,
        width:'85%',  
        fontSize:16,
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:50,
    }
})