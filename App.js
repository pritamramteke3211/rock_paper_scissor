import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RockPaper from './components/RockPaper'

const App = () => {
  return (
    <View style={styles.container}>
      <RockPaper/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
})