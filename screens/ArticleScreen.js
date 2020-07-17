import React, { StyleSheet, SafeAreaView, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

const ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is article scrern.</Text>
    </SafeAreaView>
  )
}

export default ArticleScreen
