import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/login.png')} style={styles.loginImage}/>
      <View style={styles.subContainer}> 
        <Text style={{fontSize:20,textAlign:'center',color:Colors.WHITE}}>Let's Find <Text style={{fontWeight:'bold'}}>Professional Cleaning and repair </Text>services</Text>
        <Text style={{fontSize:16, color:Colors.WHITE, marginTop:15, textAlign:'center',}}>Best app to find near you which delivers home services</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ fontSize:16,color:Colors.PRIMARYCOLOR,textAlign:'center',}}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:300,
        marginTop:60,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15,
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARYCOLOR,
        height:'70%',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
        alignItems:'center',
    },
    button:{
        padding:15,
        backgroundColor:Colors.WHITE,
        borderRadius:30,
        marginTop:30,
        width:200,
        alignItems:'center',
    }
})