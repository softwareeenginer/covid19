import React, {Component} from 'react';
import {Container, Text} from 'native-base';
import {Image, TouchableOpacity, View} from 'react-native';
import {InformationStyle} from '../../../assets/styles/styles';

class InfoTouchTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <TouchableOpacity style={InformationStyle.info_two_touch_mom}>
                <View style={InformationStyle.info_two_view}>
                    <Image
                        style={InformationStyle.info_two_image}
                        source={this.props.image}
                    />
                    <View style={InformationStyle.info_two_text_view}>
                        <Text style={InformationStyle.info_two_text}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default InfoTouchTwo;
