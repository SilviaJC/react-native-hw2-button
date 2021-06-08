import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import mainStyle from '../styles/main'

export default function TravelForeignScreen(props) {
    const [sImg, setSImg] = useState(false)
    const [eImg, setEImg] = useState(false)
    const getSweden = () => {
        setSImg(!sImg)
        setEImg(false)
    }
    const getEgypt = () => {
        setEImg(!eImg)
        setSImg(false)
    }

    return (
        <View style={styles.container}>
            <Text style={mainStyle.titText_es}>Historia del viaje extranjero</Text>
            <Text style={[mainStyle.titText_ch, { marginTop: 20, marginBottom: 20 }]}>國外旅行紀錄</Text>
            {
                sImg == false ? <Text></Text> : <Image
                    style={mainStyle.travelImg}
                    source={require('../img/f_Sweden-Stockholm.jpg')}
                ></Image>
            }
            {
                eImg == false ? <Text></Text> : <Image
                    style={mainStyle.travelImg}
                    source={require('../img/f_Egypt-Cairo.jpg')}
                ></Image>
            }

            <TouchableOpacity onPress={() => getEgypt()} style={mainStyle.travelBtn}>
                <Text style={mainStyle.travelOpactiyText}>
                    Egypt - Cairo
                 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getSweden()} style={mainStyle.travelBtn}>
                <Text style={mainStyle.travelOpactiyText}>
                    Sweden - Stockholm
                 </Text>
            </TouchableOpacity>

            < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.pop()}>
                <Text style={mainStyle.text}>Volve a viaje</Text>
            </TouchableOpacity>
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
