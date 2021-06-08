import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import mainStyle from '../styles/main'

const imgList = {
    img0: require('../img/d_Yilan-water_rafting.jpg'),
    img1: require('../img/d_Kenting_diving.jpg'),
    img2: require('../img/d_Liuqiu.jpg')
}

//設定假資料
var MOCKED_DATA = [
    {
        id: '1',
        note: '宜蘭 - 安農溪泛舟',
        date: '2020.10.17',
        img: imgList.img0
    },
    {
        id: '2',
        note: '墾丁潛水 - 香蕉灣',
        date: '2020.11.22',
        img: imgList.img1
    },
    {
        id: '3',
        note: '小琉球 - Free Diving 學習網美去',
        date: '2020.12.20',
        img: imgList.img2
    }
]

export default function TravelDomesticScreen(props) {
    const [dataSource, setDataSource] = useState([])

    // hard code 的方式練習
    useEffect(() => {
        var viaja = MOCKED_DATA	//or FAKE_DATA 用假資料會以全大寫命名
        setDataSource(viaja)
    }, [])

    const showViajaDetail = (cases) => {
        props.navigation.push('TravelDomesticDetail', { passProps: cases })
    }

    // 先把 style 寫完, 再來丟資料
    const renderViaja = (cases) => {
        return (
            <TouchableOpacity onPress={() => showViajaDetail(cases)}>
                <View>
                    <View style={mainStyle.MainView}>
                        <Image
                            style={mainStyle.simage}
                            source={cases.img}
                        />
                        <View style={{ flex: 1 }}>
                            {/* 排序方向, 按比例自動伸縮, flex:0 表示不伸縮 可搜尋 flex box 看其他參數 */}
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                {cases.note}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ marginTop: 8, fontSize: 13, marginBottom: 8 }}>
                                {cases.date}
                            </Text>
                        </View>
                        <Image source={require('../img/ic_arrow_right.png')} style={mainStyle.simage} />
                    </View>
                    {/* 分隔線 */}
                    <View style={mainStyle.seperator} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text style={mainStyle.titText_es}>Historia del viaje interno</Text>
            <Text style={[mainStyle.titText_ch, { marginTop: 20, marginBottom: 20 }]}>國內旅行紀錄</Text>

            < FlatList
                data={dataSource}
                renderItem={cases => renderViaja(cases.item)}
                keyExtractor={cases => cases.id}
                style={{ backgroundColor: 'white' }}
            />
            <View style={mainStyle.travelContainer}>
                < TouchableOpacity style={[mainStyle.btn]} onPress={() => props.navigation.pop()}>
                    <Text style={mainStyle.text}>Volve a viaje</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

