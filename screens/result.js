import { StyleSheet,Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'

const Result = ({navigation,route}) => {
    const params =route.params;
    const {score} = route.params;
    console.log(params);
  return (
    <View style={styles.container}>
        
        <Title titleText="Results"/>
        <Text style={styles.resultScore}>Your Score is :-  {score}</Text>
        
        <View style={styles.bannerContainer}>
            <Image source={{uri:'data:image/jpeg;base64,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'}}
            style={styles.banner}
            resizeMode="contain"
            />
        </View>
        <View>
            <TouchableOpacity style={styles.button}onPress={()=>navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:"100%"
    },
    resultScore:{
        fontSize:24,
        fontWeight:'600',
        alignSelf:"center",
        color:'red',

    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    banner:{
        height:300,
        width:300

    },
    button:{
        backgroundColor:"#1A7590",
        padding:15,
        paddingHorizontal:30,
        borderRadius:20,
        alignItems:'center',
        marginBottom:20
    },
    buttonText:{
        fontSize:18,
        fontWeight:"600",
        color:"white",
    }
})