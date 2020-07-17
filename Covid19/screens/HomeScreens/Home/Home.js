import React, {Component} from 'react';
import {View,Text,TouchableOpacity} from "react-native";
import {DrawerActions} from "@react-navigation/native";
import {t} from '../../../locales/i18n';
import {Icon,Tabs,Tab} from "native-base";
import {GeneralStyle, HomeStyle} from '../../../assets/styles/styles';
import News from './Tabs/News';
import Information from './Tabs/Information';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={HomeStyle.home_moth_view}>
                <View style={HomeStyle.home_top_view}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.dispatch(
                                DrawerActions.toggleDrawer()
                            )
                        }}
                        style={HomeStyle.home_top_touch}
                    >
                        <Icon style={HomeStyle.home_top_icon} type='FontAwesome5' name='align-left'/>
                    </TouchableOpacity>
                    <Text style={HomeStyle.home_top_text}>{t('homepage')}</Text>
                </View>
                <View style={GeneralStyle.gray_line}/>
                <View style={HomeStyle.home_tabs_view}>
                    <Tabs
                        scrollWithoutAnimation={true}
                        tabBarUnderlineStyle={HomeStyle.home_tabs}
                        initialPage={0}
                    >
                        <Tab
                            tabStyle={HomeStyle.home_tab_tabStyle}
                            activeTabStyle={HomeStyle.home_tab_activeTabStyle}
                            textStyle={HomeStyle.home_tab_textStyle}
                            activeTextStyle={HomeStyle.home_tab_activeTextStyle}
                            heading={t('news')}
                        >
                            <News />
                        </Tab>
                        <Tab
                            tabStyle={HomeStyle.home_tab_tabStyle}
                            activeTabStyle={HomeStyle.home_tab_activeTabStyle}
                            textStyle={HomeStyle.home_tab_textStyle}
                            activeTextStyle={HomeStyle.home_tab_activeTextStyle}
                            heading={t("about_covid19")}
                        >
                            <Information />
                        </Tab>
                    </Tabs>
                </View>
            </View>
        );
    }
}

export default Home;
