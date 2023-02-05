import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const shuffleArray=(array)=> {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Quiz = ({navigation}) => {
    const [questions,setQuestion]= useState();
    const [noquestion,setNoquestion] = useState(0);
    const [options,setOptions] = useState([]);
    const [score,setScore] = useState(0)
    const getQuiz=async()=>{
        const url= "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple&encode=url3986";
        const response = await fetch(url);
        const data =await response.json();
        // console.log(data.results[0]);
        setQuestion(data.results);
        setOptions(optionsAndShuffel(data.results[0]));
    };
    useEffect(()=>{
        getQuiz()
    },[]);

    const nextQuestion=()=>{
        setNoquestion(noquestion+1);
        setOptions(optionsAndShuffel(questions[noquestion+1]));
    }

    const optionsAndShuffel=(_question)=>{
        const options =[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options);
        return options;
    }

    const selectedOption=(_option)=>{
        if(_option === questions[noquestion].correct_answer){
            setScore(score+10)
        }
        if(noquestion!==10){
            setNoquestion(noquestion+1);
            setOptions(optionsAndShuffel(questions[noquestion+1]));

        }
        
        console.log(_option === questions[noquestion].correct_answer)
    }

    const showResult=()=>{
        navigation.navigate('Result',{
            score:score
        } );
    }
  return (
    <View style={styles.container}>
        {
            questions&&
        <View style={styles.parent}>
        <View style={styles.top}>
            <Text style={styles.question}>Q. :- {decodeURIComponent(questions[noquestion].question)}</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionsButton} onPress={()=>selectedOption(options[0])}>
                <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton} onPress={()=>selectedOption(options[1])}>
                <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton} onPress={()=>selectedOption(options[2])}>
                <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionsButton} onPress={()=>selectedOption(options[3])}>
                <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
            </TouchableOpacity>

        </View>
        <View style={styles.buttom}>
            
            
            {
                noquestion !==9 &&
                <TouchableOpacity style={styles.button} onPress={nextQuestion}>
                    <Text style={styles.buttonText}>Skip</Text>
                </TouchableOpacity>
            }
            {
                noquestion ===9 &&
                <TouchableOpacity style={styles.button} onPress={()=>showResult()}>
                    <Text style={styles.buttonText}>Show Results</Text>
                </TouchableOpacity>
            }
            
           
        </View>
        </View>
        }
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        paddingHorizontal:20,
        height:"100%"
    },
    parent:{
        height:'100%',
    },
    top:{
        marginVertical:16,
        backgroundColor:'blue',
        borderRadius:10,  
    },
    question:{
        fontSize:28,
        color: 'black',
    },
    options:{
        marginVertical:16,
        flex:1,
    },
    option:{
        fontSize:18,
        fontWeight:'500',
        color:'white',
    },
    optionsButton:{
        padding:12,
        marginVertical:6,
        backgroundColor:'#34A0A4',
        borderRadius:12,
    },
    buttom:{
        marginBottom:12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection:'row',
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