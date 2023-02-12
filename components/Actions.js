import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FA5 from 'react-native-vector-icons/FontAwesome5'


const Actions = ({play, canPlay}) => {
  return (
    <View style={styles.actions}>
      {/* Rock */}
      <TouchableOpacity
      disabled={!canPlay}
      style={styles.actionButton}
      onPress={() => play(1)}
      >
        <FA5 name={'hand-rock'} size={32} color="#645300"/>
      </TouchableOpacity>

      {/* Paper */}
      <TouchableOpacity
      disabled={!canPlay}
      style={styles.actionButton}
      onPress={() => play(2)}
      >
        <FA5 name={'hand-paper'} size={32} color="#645300"/>
      </TouchableOpacity>

      {/* Scissor */}
      <TouchableOpacity
      disabled={!canPlay}
      style={styles.actionButton}
      onPress={() => play(3)}>
        <FA5 
        style={{ transform: [{rotate : '90deg'}]}}
         name={'hand-scissors'} size={32} color="#645300" />
      </TouchableOpacity>

    </View>
  )
}

export default Actions

const styles = StyleSheet.create({
  actions: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton:{
    width: 64,
    height: 64,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f9d835',
    borderRadius: 32,
  },
})