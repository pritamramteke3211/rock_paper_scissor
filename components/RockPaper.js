import { Animated, SafeAreaView, StyleSheet, Text, View,Dimensions } from 'react-native'
import React,{useState, useRef, useEffect} from 'react'
import DisplayResult from './DisplayResult'
import Actions from './Actions'
import Header from './Header'
import Sound from 'react-native-sound'
import win from '../assets/music/win.mp3'
import lose from '../assets/music/lose.mp3'
import draw from '../assets/music/draw.mp3'

const {width, height} = Dimensions.get('window')

const RockPaper = () => {

    const [userChoice, setuserChoice] = useState(0)
    const [computerChoice, setcomputerChoice] = useState(0)
    const [result, setresult] = useState("")
    const [canPlay, setcanPlay] = useState(true)
    const [refresh, setrefresh] = useState(false)

    // For Animation
    const fadeAnimation = useRef(new Animated.Value(1)).current

    let win_p = new Sound(win, Sound.MAIN_BUNDLE, (error) => 
    {if (error) {
        console.log('failed to load the win sound', error)    
    } }
    )    
    let lose_p = new Sound(lose, Sound.MAIN_BUNDLE, (error) =>  
    {if (error) {
        console.log('failed to load the lose sound', error)    
    } }    
    )    
    let draw_p = new Sound(draw, Sound.MAIN_BUNDLE, (error) =>  {
        {if (error) {
        console.log('failed to load the draw sound', error)    
    } }
    })    

    const [win_s, setwin_s] = useState(win_p)
    const [lose_s, setlose_s] = useState(lose_p)
    const [draw_s, setdraw_s] = useState(draw_p)

   

    const play = choice =>{
        // const win = new Audio('../assets/music/win.mp3')

        // We have 3 choice
        // 1 = rock
        // 2 = paper
        // 3 = scissors

        const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
        let resultString = "";

        console.log("randomComputerChoice",randomComputerChoice,choice);

        if (choice === 1) {
            resultString = randomComputerChoice === 3 ? "WIN" : "LOSE";
        }
        else if (choice === 2) {
            resultString = randomComputerChoice === 1 ? "WIN" : "LOSE";
        }
        else {
            resultString = randomComputerChoice === 2 ? "WIN" : "LOSE";
        }

        if (choice === randomComputerChoice) {
            resultString = "DRAW";
        }
     
        console.log(resultString)
     
      

        setuserChoice(choice)
        setcomputerChoice(randomComputerChoice)
        

        // Wait animation hide old result
        setTimeout(() => {
            console.log("result",resultString)
            setresult(resultString)   
            setrefresh(!refresh)         
        }, 300);


        
        

        // Animation hide old result and show new result
        Animated.sequence([
            Animated.timing(fadeAnimation, {
                toValue:0,
                duration:300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnimation, {
                toValue:1,
                duration: 300,
                useNativeDriver : true,
            }),
        ]).start();

        // Disable action when animation running
        setcanPlay(false);
        setTimeout(() => {
            setcanPlay(true);
        }, 600);
    }

    useEffect(() => {
        
       
        if ( result == "WIN") {
            console.log("win run")
                win_s.play()    
                // win_s.stop()       
            }
            else if(result == "LOSE"){
                lose_s.play()
                // lose_s.stop()       
            }
            else{
                draw_s.play()
                // draw_s.release()       
            }
            
    }, [refresh])

  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <View style={styles.content}>
            <View style={styles.result}>
                <Animated.Text style={[styles.resultText, {opacity: fadeAnimation}]}>
                    {result}
                </Animated.Text>
            </View>
            <View style={styles.screen}>
                {!result ? (
                    <Text style={styles.readyText}>Let's Play</Text>
                ):
                (
                    <DisplayResult
                    userChoice={userChoice}
                    computerChoice={computerChoice}
                    />
                )
                }
            </View>
            <Actions play={play} canPlay={canPlay} />
        </View>
    </SafeAreaView>
  )
}

export default RockPaper

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // paddingTop: height,
    },
    content : {
        flex: 1,
        marginBottom: 5,
        justifyContent:'space-between',
        backgroundColor: '#e8eaed',
    },
    result:{
        height: 100,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    resultText : {
        fontSize: 48,
        fontWeight: 'bold',
    },
    screen: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent:'space-around',
    },
    readyText : {
        marginTop: -48,
        alignItems:'center',
        textAlign:'center',
        width: '100%',
        fontSize:48,
        fontWeight:'bold',
    },
})