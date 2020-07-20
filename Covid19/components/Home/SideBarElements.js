import React,{Component} from "react";
import {View,TouchableOpacity,Text} from "react-native";
import {Icon} from "native-base";
import {SideBarandElementsStyles} from '../../assets/styles/styles';
import {t} from '../../locales/i18n';

class SideBarElements extends Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('WorldStatus')
                    }}
                    style={SideBarandElementsStyles.side_touch}
                >
                    <Icon style={SideBarandElementsStyles.side_icon} type='Fontisto' name='world'/>
                    <Text style={SideBarandElementsStyles.side_text}>{t('world_status')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('TurkeyStatus')
                    }}
                    style={SideBarandElementsStyles.side_touch}
                >
                    <Icon style={SideBarandElementsStyles.side_icon} type='Entypo' name='info-with-circle'/>
                    <Text style={SideBarandElementsStyles.side_text}>{t('turkey_status')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('MedicinesUse')
                    }}
                    style={SideBarandElementsStyles.side_touch}
                >
                    <Icon style={SideBarandElementsStyles.side_icon} type='AntDesign' name='medicinebox'/>
                    <Text style={SideBarandElementsStyles.side_text}>{t('medicines_i_use')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Suggestions')
                    }}
                    style={SideBarandElementsStyles.side_touch}
                >
                    <Icon style={SideBarandElementsStyles.side_icon} type='AntDesign' name='pushpino'/>
                    <Text style={SideBarandElementsStyles.side_text}>{t('suggestions')}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default SideBarElements;
