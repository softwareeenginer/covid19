import React, {Component} from 'react';
import {Text} from 'native-base';
import {View,ScrollView,TouchableOpacity,Image,ImageBackground} from "react-native";
import InfoTouchOne from '../../../../components/Home/Information/InfoTouchOne';
import InfoTouchTwo from '../../../../components/Home/Information/InfoTouchTwo';
import {InformationStyle} from '../../../../assets/styles/styles';
import {t} from '../../../../locales/i18n';

class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    information=[
        {
            text:t('whats_covid'),
            image:require('../../../../images/home/information/whatscorona.jpg')
        },
        {
            text:t('covid_miscopceptions'),
            image:require('../../../../images/home/information/wronginfo.jpg')
        },
        {
            text:t('distance_rules'),
            image:require('../../../../images/home/information/distancerules.jpg')
        },
        {
            text:t('covid_history'),
            image:require('../../../../images/home/information/corona-history.jpg')
        }
    ]
    render() {
        return (
            <View style={InformationStyle.info_moth_view}>
                <ImageBackground
                    style={InformationStyle.info_background}
                    source={require('../../../../images/home/backgroundtwo.png')}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <InfoTouchOne {...this.props} {...this.information[0]} />
                        <InfoTouchTwo {...this.props} {...this.information[1]}/>
                        <InfoTouchOne {...this.props} {...this.information[2]} />
                        <InfoTouchTwo {...this.props} {...this.information[3]} />
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

export default Information;
