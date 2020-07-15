import * as React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer";
import Home from '../screens/HomeScreens/Home/Home';
import SideBar from '../components/SideBar';
import {GeneralStyle} from '../assets/styles/styles';
const drawerNavigator = {
    Home
}

const Drawer = createDrawerNavigator()

export default class DrawerNavigator extends React.Component {
    render() {
        return (
            <Drawer.Navigator
                drawerStyle={GeneralStyle.drawer_width}
                {...this.props}
                drawerContent={(props) => <SideBar {...props} />}
            >
                {
                    Object.keys(drawerNavigator).map((e, i) => {
                        return <Drawer.Screen name={e} component={drawerNavigator[e]} key={i.toString()}/>
                    })
                }
            </Drawer.Navigator>
        )
    }
}
