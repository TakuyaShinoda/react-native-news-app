import React from 'react'
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip List</Text>
    </SafeAreaView>
  )
}

export default ClipScreen
