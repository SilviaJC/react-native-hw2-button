import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import buttonStyle from '../../styles/buttonStyle'
import textStyle from '../../styles/textStyle'

const AzulButton = props => (
    < TouchableOpacity style={[{ backgroundColor: props.bg }, buttonStyle.btnOpacity]} onPress={props.onPress}>
        {/* <Text style={{ color: props.color }}> */}
        <Text style={[{ color: props.color }, textStyle.textOpacity]}>
            {props.title}
        </Text>
    </TouchableOpacity >
)

export default AzulButton