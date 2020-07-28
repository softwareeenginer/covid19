import React, {Component} from 'react';
import {gray} from '../../../../assets/styles/colors';
import {Text, View} from 'react-native';
import {WorldStatusStyles} from '../../../../assets/styles/styles';

class NOCDark extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={WorldStatusStyles.nocdark_moth_view}>
                <View style={WorldStatusStyles.nocdark_width_view}>
                    <Text style={WorldStatusStyles.nocdark_country}>{this.props.country}</Text>
                </View>
                <Text>: {this.props.case}</Text>
            </View>
        );
    }
}

export default NOCDark;
