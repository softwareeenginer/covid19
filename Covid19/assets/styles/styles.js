import {StyleSheet} from "react-native";
import {black, dark_red, gray, white} from './colors';
export const GeneralStyle = StyleSheet.create({
    // ------------ Component -> TopBar ------------ //
    topbar_mom_view:{height:50,backgroundColor:white,justifyContent:'center',alignItems:'center'},
    topbar_touch:{position:'absolute',left:12},
    topbar_text:{fontSize:17,fontWeight:'bold'},

    // ------------ Gray Line ------------ //
    gray_line:{height:2, backgroundColor: gray,elevation:10},

    // ------------ Drawer Style ------------ //
    drawer_width:{width:'45%'},

});
export const HomeStyle = StyleSheet.create({
    home_moth_view:{flex:1,backgroundColor:white},
    home_top_view:{alignItems:'center',justifyContent:'center',height:50},
    home_top_touch:{position:'absolute',left:12},
    home_top_icon:{fontSize:20},
    home_top_text:{fontSize:17,fontWeight:'bold',fontStyle:'italic'},
    home_tabs_view:{flex:1},
    home_tabs:{backgroundColor:gray,borderRadius:10,width:'8.3%',alignSelf:'center',elevation:4},
    home_tab_tabStyle:{backgroundColor:white},
    home_tab_activeTabStyle:{backgroundColor:dark_red},
    home_tab_textStyle:{color:black,fontSize:14,fontStyle:'italic',fontWeight:'bold'},
    home_tab_activeTextStyle:{color:white,fontWeight:'bold',fontStyle:'italic',fontSize:17},
});
