import React,{Component} from "react";
import {View,Text,ScrollView} from "react-native";
import {dark_blue, dark_red, white} from '../../../../assets/styles/colors';
import TopBar from '../../../../components/TopBar';
import NOCLight from '../../../../components/Home/Information/NumberofCases/NOCLight';
import NOCDark from '../../../../components/Home/Information/NumberofCases/NOCDark';
import {WorldStatusStyles} from '../../../../assets/styles/styles';

class WorldStatus extends Component {
    toptitle={"toptitle":"Dünya' nın Durumu"}
    render(){
        return(
            <View style={WorldStatusStyles.world_moth_view}>
                <TopBar {...this.props} {...this.toptitle} />
                <ScrollView style={WorldStatusStyles.world_scroll_view_and_normal_view}>
                    <View style={WorldStatusStyles.world_scroll_view_and_normal_view}>
                        <View style={WorldStatusStyles.world_cases_number_view}>
                            <Text style={WorldStatusStyles.world_cases_number}>Vaka Sayısı: </Text>
                            <Text style={WorldStatusStyles.world_cases}>16.457.922</Text>
                        </View>
                        <View style={WorldStatusStyles.world_death_number_view}>
                            <Text style={WorldStatusStyles.world_death_number}>Ölüm: </Text>
                            <Text style={WorldStatusStyles.world_death}>654.309</Text>
                        </View>
                        <View style={WorldStatusStyles.world_noc_dark_and_light_view}>
                            <NOCLight country={'Amerika Birleşik Devletleri'} case={"4,39 Mn"} />
                            <NOCDark country={'Brezilya'} case={"2,45 Mn"} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
export default WorldStatus;
