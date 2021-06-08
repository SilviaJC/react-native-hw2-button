import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import mainStyle from '../styles/main'

export default function TravelScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={mainStyle.titText_es}>Historia del viaje</Text>
            <Text style={[mainStyle.titText_ch, { marginTop: 20, marginBottom: 20 }]}>旅行紀錄</Text>

            < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.push('TravelDomesticScreen')}>
                <Text style={mainStyle.text}>國內旅行</Text>
            </TouchableOpacity>
            < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.push('TravelForeignScreen')}>
                <Text style={mainStyle.text}>國外旅行</Text>
            </TouchableOpacity>

            {/* <Button
                title='國內旅行'
                onPress={() => props.navigation.push('TravelDomesticScreen')}
            />
            <Button
                title='國外旅行'
                onPress={() => props.navigation.push('TravelForeignScreen')}
            /> */}
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
