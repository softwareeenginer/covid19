import React, {Component} from 'react';
import {View} from 'react-native';
import SideBarElements from './SideBarElements';
import {SideBarandElementsStyles} from '../../assets/styles/styles';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={SideBarandElementsStyles.side_moth_view}>
                <SideBarElements {...this.props} />
            </View>
        );
    }
}
export default SideBar;
