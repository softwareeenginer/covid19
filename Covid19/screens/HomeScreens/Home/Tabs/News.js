import React, {Component} from 'react';
import {Text} from 'native-base';
import {View} from "react-native";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Text>Haberler</Text>
            </View>
        );
    }
}

export default News;
