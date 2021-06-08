import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import mainStyle from '../styles/main'

export default function HomeScreen(props) {
    // props 從外部 createStackNavigator 帶過來
    const [name, setName] = useState('Visitante')   // guest
    const changeName = (NameGet) => {
        setName(NameGet)
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../img/img01.jpg')}
                style={mainStyle.bgImg}
                imageStyle={{ resizeMode: 'cover' }} //stretch
            >
                <Text style={mainStyle.hwTit}> HW 5 - 2-w2-navigation</Text>
                <Text style={mainStyle.titText}>Bienvenido {name} a mi página</Text>
                <Text style={mainStyle.titText_es}>Sobre la historia del viaje</Text>
                <Text style={mainStyle.titText_ch}>旅行紀錄</Text>

                <TextInput
                    maxLength={20}
                    style={mainStyle.input}
                    onChangeText={((text) => setName(text))}
                    value={name}
                />

                < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.push('HomeDetailScreen', { name: name, funcName: (arg) => changeName(arg) })}>
                    <Text style={mainStyle.text}> go to next page</Text>
                </TouchableOpacity>

                {/* <Button
                    title='go to next page'
                    //name 外到內傳值, funcName 內而外帶出值
                    onPress={() => props.navigation.push('HomeDetailScreen', { name: name, funcName: (arg) => changeName(arg) })}
                // onPress={() => props.navigation.push('HomeDetailScreen', {})}    // 有接收但沒傳也不會出錯
                /> */}
            </ImageBackground>
        </View >
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
