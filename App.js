import React from 'react'
import { StyleSheet, View } from 'react-native'

import ListItem from './components/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl={'https://picsum.photos/200/200'}
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'
        }
        author={'React News'}
      />
      <ListItem
        imageUrl={'https://picsum.photos/200/200'}
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'
        }
        author={'React News'}
      />
      <ListItem
        imageUrl={'https://picsum.photos/200/200'}
        title={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'
        }
        author={'React News'}
      />
    </View>
  )
}

export default App
