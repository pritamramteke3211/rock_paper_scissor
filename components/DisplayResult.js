import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FA5 from 'react-native-vector-icons/FontAwesome5'

const ICONS = ['hand-rock','hand-paper','hand-scissors'];

const DisplayResult = ({userChoice, computerChoice}) => {
  
  return (
    <>
    <View>
      <FA5
      name={ICONS[userChoice - 1]}
      size={64}
      color='#f9d835'
      solid
      style={userChoice === 3 && styles.scissorsIcon}
      />
      <Text style={styles.playerName}>You</Text>
    </View>

    <View>
      <FA5
      name={ICONS[computerChoice - 1]}
      size={64}
      color='#f9d835'
      solid
      style={computerChoice === 3 && styles.scissorsIcon}
      />
      <Text style={styles.playerName}>Computer</Text>
    </View>
    </>
  )
}

export default DisplayResult

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  playerName: {
    color: '#373737',
    fontSize: 16,
    marginTop: 16,
  },
  
  scissorsIcon:{
    transform: [
      {rotate: '90deg'}
    ],
  },
 
})