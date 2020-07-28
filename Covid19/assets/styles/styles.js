import {StyleSheet} from "react-native";
import {black, dark_blue, dark_gray, dark_red, gray, white} from './colors';

//----------  ----------//

export const GeneralStyle = StyleSheet.create({
    // ------------ Component -> TopBar ------------ //
    topbar_mom_view:{height:50,backgroundColor:white,justifyContent:'center',alignItems:'center'},
    topbar_touch:{position:'absolute',left:12},
    topbar_text:{fontSize:17,fontWeight:'bold'},

    // ------------ Gray Line ------------ //
    gray_line:{height:2, backgroundColor: gray,elevation:10},

    // ------------ Drawer Style ------------ //
    drawer_width:{width:'35%'},

});

//----------  Home styles ----------//
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

//----------  News styles (in homepage) ----------//
export const NewsStyle = StyleSheet.create({
    news_moth_view:{flex:1},
    news_background:{flex:1},
    news_touch:{backgroundColor:white,width:'95%',height:150,alignSelf:'center',borderRadius:8,marginTop:20,flexDirection:'row',justifyContent:'space-between'},
    news_image_view:{flexDirection:'row',width:'45%',alignItems:'center'},
    news_image:{height:130,width:'90%',borderRadius:8,marginLeft:8},
    news_all_text_view:{width:'55%'},
    news_title:{alignSelf:'center',fontSize:15,fontStyle:'italic',fontWeight:'bold',marginTop:2,color:dark_gray},
    news_text_view:{width:'90%',alignSelf:'center',height:'79%'},
    news_text:{fontSize:13,color:gray},
});

//----------  Information styles (in homepage) ----------//
export const InformationStyle = StyleSheet.create({
    info_moth_view:{flex:1},
    info_background:{flex:1},

    //----------  Information touch one styles ----------//
    info_one_touch_mom:{flexDirection:'row',justifyContent:'flex-end',width:'95%',borderWidth:2,height:80,alignSelf:'center',borderTopLeftRadius:200,borderBottomLeftRadius:20,borderColor:white,marginTop:20,borderTopRightRadius:10,borderBottomRightRadius:10},
    info_one_view:{flexDirection:'row',width:'80%',alignItems:'center'},
    info_one_text_view:{width:'53%'},
    info_one_text:{width:'90%',fontSize:14,fontWeight:'bold',fontStyle:'italic',color:white},
    info_one_image:{height:70,width:'45%',borderRadius:10},

    //----------  Information touch two styles ----------//
    info_two_touch_mom:{flexDirection:'row',width:'95%',borderWidth:2,height:80,alignSelf:'center',borderTopLeftRadius:10,borderBottomLeftRadius:10,borderColor:white,marginTop:20,borderTopRightRadius:200,borderBottomRightRadius:20},
    info_two_view:{flexDirection:'row',width:'80%',alignItems:'center',marginLeft:5},
    info_two_image:{height:70,width:'45%',borderRadius:10},
    info_two_text_view:{marginLeft:20,width:'55%'},
    info_two_text:{width:'80%',fontSize:14,fontWeight:'bold',fontStyle:'italic',color:white},
});

//----------  Sidebar styles (in homepage)-[Drawer] ----------//
export const SideBarandElementsStyles = StyleSheet.create({
    side_moth_view:{flex:1,backgroundColor:white,alignItems:'center'},

    //----------  SideBarElements styles ----------//
    side_touch:{alignItems:'center',marginTop:50},
    side_icon:{color:dark_red},
    side_text:{marginTop:8,fontStyle:'italic',fontWeight:'bold',color:dark_red,fontSize:11,textAlign:'center'},
});

//----------  WorldStatus styles (in SideBar) ----------//
export const WorldStatusStyles = StyleSheet.create({
    world_moth_view:{flex:1,backgroundColor:white},
    world_scroll_view_and_normal_view:{flex:1},
    world_cases_number_view:{justifyContent:'center',alignItems:'center',marginTop:40,flexDirection:'row'},
    world_cases_number:{fontSize:25,fontWeight:'bold'},
    world_cases:{fontSize:28,fontWeight:'bold',fontStyle:'italic',color:dark_blue},
    world_death_number_view:{justifyContent:'center',alignItems:'center',marginTop:10,flexDirection:'row'},
    world_death_number:{fontSize:25,fontWeight:'bold'},
    world_death:{fontSize:28,fontWeight:'bold',fontStyle:'italic',color:dark_red},
    world_noc_dark_and_light_view:{marginVertical:40,alignItems:'center'},

    //----------  NOCLight styles ----------//
    noclight_moth_view:{flexDirection:'row',alignSelf:'center'},
    noclight_width_view:{width:'60%'},
    noclight_country:{fontWeight:'bold'},

    //----------  NOCDark styles ----------//
    nocdark_moth_view:{flexDirection:'row',alignSelf:'center',backgroundColor:gray},
    nocdark_width_view:{width:'60%'},
    nocdark_country:{fontWeight:'bold'},


});
