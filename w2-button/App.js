import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0)
  const [cimage, setCimage] = useState(0)
  const [bgcolor, setBgcolor] = useState(3)

  const imgList = {
    img0: require('./src/images/img01.jpg'),
    img1: require('./src/images/img02.jpg'),
    img2: require('./src/images/img03.jpg')
  }

  const startCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  const changeImg = () => {
    setCimage((cimage + 1) % 3)
    console.log('改圖片: ' + (cimage + 1) % 3)
  }

  const changeBgcolor = () => {
    setBgcolor((bgcolor + 1) % 4)
    console.log('改顏色: ' + (bgcolor + 1) % 4)
  }

  return (
    <View style={styles[`container${bgcolor}`]}>
      {/* <View style={styles[`container`]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      <Text style={{ fontSize: 20, marginBottom: 60, color: '#B3B3B3' }}> HW 2 - 按鈕組件應用</Text>
      {/* display all */}
      <Image
        style={{ width: 200, height: 133, marginBottom: 10 }}
        // source={require('./src/images/img01.jpg')}
        source={imgList["img" + cimage]}
      />
      <Text style={styles.showMsg}>計數器值:  {count}</Text>

      {/* 計數器 */}
      <TouchableOpacity onPress={() => startCount()} style={{ margin: 16, width: 240, height: 40, backgroundColor: '#009393', border: 0, borderRadius: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 26 }}>
          Start Count
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => resetCount()} style={{ marginBottom: 16, width: 240, height: 40, backgroundColor: '#003E3E', border: 0, borderRadius: 20 }}>
        <Text style={styles.textOpactiy}>
          Reset Count
        </Text>
      </TouchableOpacity>

      {/* 圖片變換 */}
      <TouchableOpacity onPress={() => changeImg()} style={{ marginBottom: 16, width: 240, height: 40, backgroundColor: '#8080C0', border: 0, borderRadius: 20 }}>
        <Text style={styles.textOpactiy}>
          Change Image
        </Text>
      </TouchableOpacity>

      {/* 背景顏色變換 */}
      <TouchableOpacity onPress={() => changeBgcolor()} style={{ width: 340, height: 40, backgroundColor: '#84C1FF', border: 0, borderRadius: 20 }}>
        <Text style={styles.textOpactiy}>
          Change backgroundColor
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container0: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#B9B9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FF9797',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    backgroundColor: '#A3D1D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showMsg: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textOpactiy: {
    color: 'white',
    textAlign: 'center',
    fontSize: 26
  },
  defOpacity: {
    margin: 16,
    width: 240,
    height: 40,
    borderRadius: 20,
    marginBottom: 16,
    borderRadius: 20
  }
});
