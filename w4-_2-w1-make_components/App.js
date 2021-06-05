import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AzulButton from './src/components/button/azulButton';

export default function App() {
  const printButton = () => {
    console.log('按到自製按扭了')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hwTit}> HW 4 - 2-w1-自製元件</Text>
      <AzulButton title={'Click Me'} bg={'green'} color={'white'} onPress={() => printButton()} />
    </View>
  );
}

const styles = StyleSheet.create({
  hwTit: {
    fontSize: 20,
    marginBottom: 60,
    color: '#B3B3B3'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
