import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types'    //使用前記得安裝 prop-types
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


AzulButton.propTypes = {
    title: PropTypes.string.isRequired,	//沒輸入會出現 warning
    bg: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
};
AzulButton.defaultProps = {
    myTitle: 'No name',		//有設定 default 就不會有 warning
    bg: '#000',
    color: '#fff',
    onPress: null
};


export default AzulButton