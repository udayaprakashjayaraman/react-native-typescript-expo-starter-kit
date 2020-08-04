import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sidemenu from './Sidemenu';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ldashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
