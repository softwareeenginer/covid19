import React, {Component} from 'react';
import {Container, Text} from 'native-base';
import {Image, TouchableOpacity, View} from 'react-native';
import {InformationStyle} from '../../../assets/styles/styles';

class InfoTouchOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <TouchableOpacity style={InformationStyle.info_one_touch_mom}>
                <View style={InformationStyle.info_one_view}>
                    <View style={InformationStyle.info_one_text_view}>
                        <Text style={InformationStyle.info_one_text}>{this.props.text}</Text>
                    </View>
                    <Image
                        style={InformationStyle.info_one_image}
                        source={this.props.image}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

export default InfoTouchOne;
