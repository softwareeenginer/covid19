import React,{Component} from "react";
import {View,Text,TouchableOpacity} from "react-native";
import {Icon} from "native-base";
import {GeneralStyle} from '../assets/styles/styles';
class TopBar extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render(){
        return(
            <View style={GeneralStyle.topbar_mom_view}>
                <TouchableOpacity style={GeneralStyle.topbar_touch}>
                    <Icon type='Octicons' name='chevron-left'/>
                </TouchableOpacity>
                <Text style={GeneralStyle.topbar_text}>Başlık</Text>
            </View>
        )
    }
}
export default TopBar;
