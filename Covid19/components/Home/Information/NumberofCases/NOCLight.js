import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {WorldStatusStyles} from '../../../../assets/styles/styles';

class NOCLight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={WorldStatusStyles.noclight_moth_view}>
                <View style={WorldStatusStyles.noclight_width_view}>
                    <Text style={WorldStatusStyles.noclight_country}>{this.props.country}</Text>
                </View>
                <Text>: {this.props.case}</Text>
            </View>
        );
    }
}
export default NOCLight;
