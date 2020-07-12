import React from 'react'
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native'

import ListItem from './components/ListItem'
import articles from './dummies/articles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const App = () => {
  const renderItem = ({ item }) => (
    <ListItem
      imageUrl={item.urlToImage}
      title={item.title}
      author={item.author}
    />
  )
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      ></FlatList>
    </SafeAreaView>
  )
}

export default App
