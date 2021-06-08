import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import mainStyle from '../styles/main'

export default function TravelDomesticScreen(props) {
    const [yimg, setYImg] = useState(false)
    const [kimg, setKImg] = useState(false)
    const getYilan = () => {
        setYImg(!yimg)
        setKImg(false)
    }
    const getKenting = () => {
        setKImg(!kimg)
        setYImg(false)
    }

    return (
        <View style={styles.container}>
            <Text style={mainStyle.titText_es}>Historia del viaje interno</Text>
            <Text style={[mainStyle.titText_ch, { marginTop: 20, marginBottom: 20 }]}>國內旅行紀錄</Text>
            {
                yimg == false ? <Text></Text> : <Image
                    style={mainStyle.travelImg}
                    source={require('../img/d_Yilan-water_rafting.jpg')}
                ></Image>
            }
            {
                kimg == false ? <Text></Text> : <Image
                    style={mainStyle.travelImg}
                    source={require('../img/d_Kenting_diving.jpg')}
                ></Image>
            }

            <TouchableOpacity onPress={() => getYilan()} style={mainStyle.travelBtn}>
                <Text style={mainStyle.travelOpactiyText}>
                    宜蘭 - 安農溪泛舟
                 </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => getKenting()} style={mainStyle.travelBtn}>
                <Text style={mainStyle.travelOpactiyText}>
                    墾丁潛水 - 香蕉灣
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
