import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity } from 'react-native';
import mainStyle from '../styles/main'

export default function HomeDetailScreen(props) {

    const name = props.route.params.name || 'no get data'

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../img/img01.jpg')}
                style={mainStyle.bgImg}
                imageStyle={{ resizeMode: 'cover' }} //stretch
            >
                {/* <Text>HomeDetailScreen</Text> */}
                <Text>Hola {name}</Text>

                {/* <Text>{props.route.params.name || 'no get data'}</Text> */}

                {/* 用接收到的 funcName 傳值出去 */}
                {/* <Button
                    title='change name'
                    onPress={() => props.route.params.funcName('SJ')}
                /> */}
                < TouchableOpacity style={mainStyle.btn} onPress={() => props.route.params.funcName('SJ')}>
                    <Text style={mainStyle.text}> Cambie el nombre</Text>
                </TouchableOpacity>

                {/* name, funcName 外到內傳值 function 也可以 */}
                {/* <Button
                    title='back home'
                    onPress={() => props.navigation.pop()}
                /> */}
                < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.pop()}>
                    <Text style={mainStyle.text}>Volve</Text>
                </TouchableOpacity>
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
