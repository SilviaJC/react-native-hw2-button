import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import mainStyle from '../styles/main'

export default function TravelDomesticDetail(props) {
    const passProps = props.route.params.passProps || 'nothing get'

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={mainStyle.travelImg}
                    source={passProps.img}
                />
                <View style={{ flex: 1 }}>
                    <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                        {passProps.note}
                    </Text>
                    <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>
                        {passProps.date}
                    </Text>
                </View>
            </View>
            < TouchableOpacity style={mainStyle.btn} onPress={() => props.navigation.pop()}>
                <Text style={mainStyle.text}>Volve</Text>
            </TouchableOpacity>
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
