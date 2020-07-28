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
            <>
                <View style={GeneralStyle.topbar_mom_view}>
                    <TouchableOpacity
                        style={GeneralStyle.topbar_touch}
                        onPress={()=>{
                            this.props.navigation.goBack()
                        }}
                    >
                        <Icon type='Octicons' name='chevron-left'/>
                    </TouchableOpacity>
                    <Text style={GeneralStyle.topbar_text}>{this.props.toptitle}</Text>
                </View>
                <View style={GeneralStyle.gray_line}/>
            </>
        )
    }
}
export default TopBar;
