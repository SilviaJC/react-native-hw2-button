import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const CURRSTR = '即時驗證: '
  const [validCode, setValidCode] = useState('')
  const [reStr, setReStr] = useState('等待驗證...')
  const [reStyle, setReStyle] = useState(0)  // reStyle 0: 未輸入, 1 輸入錯誤, 2: 驗證成功

  const validSubmit = () => {
    if (validCode.length === 4) {
      if (validCode === '1234') {
        setReStr('送出後驗證: 輸入成功')
        setReStyle(2)
      } else {
        setReStr('送出後驗證: 輸入錯誤')
        setReStyle(1)
      }
    } else {
      setReStr('送出後驗證: 請輸入密碼')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.hwTit}> HW 3 - 密碼判斷 APP</Text>
      <TextInput
        maxLength={4}
        style={styles.userInput}
        onChangeText={((text) => setValidCode(text))}
        value={validCode}
        secureTextEntry={true}
        autoFocus={true}
      />

      {/* 即時驗證 */}
      {
        validCode.length === 4 ? (
          validCode === '1234' ?
            <Text style={{ color: 'blue', marginTop: 10 }}>{CURRSTR}輸入成功</Text> :
            <Text style={{ color: 'red', marginTop: 10 }}>{CURRSTR}輸入錯誤</Text>
        ) : <Text style={{ color: 'red', marginTop: 10 }}>{CURRSTR}請輸入密碼</Text>
      }

      {/* 送出後驗證 */}
      {
        reStyle === 2 ?
          <Text style={[{ color: '#004B97' }, styles.textAfterVerify]}>{reStr}</Text>
          : <Text style={[{ color: '#930000' }, styles.textAfterVerify]}> {reStr}</Text >

      }
      <TouchableOpacity onPress={() => validSubmit()} style={[styles.btnOpacity, { margin: 20 }]}>
        <Text style={styles.textOpacity}>
          Enter
	        </Text>
      </TouchableOpacity>
    </View >
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
  userInput: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    backgroundColor: '#525252',
    color: 'white', fontSize: 28,
    textAlign: 'center'
  },
  btnOpacity: {
    backgroundColor: '#00aeef',
    borderRadius: 20,
    width: 160,
    height: 40,
    justifyContent: 'center'
  },
  textOpacity: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25
  },
  textAfterVerify: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#D0D0D0'
  }
});
