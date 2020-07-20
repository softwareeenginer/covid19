import * as React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

// ------------- All Screens ------------- //

// ------------- Sidebar Elements Screens ------------- //
import WorldStatus from '../screens/HomeScreens/Home/SideBarScreens/WorldStatus';
import TurkeyStatus from '../screens/HomeScreens/Home/SideBarScreens/TurkeyStatus';
import MedicinesUse from '../screens/HomeScreens/Home/SideBarScreens/MedicinesUse';
import Suggestions from '../screens/HomeScreens/Home/SideBarScreens/Suggestions';

const stackNavigator = {
    Suggestions,
    MedicinesUse,
    TurkeyStatus,
    WorldStatus,
    Home: DrawerNavigator,
}

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component {
    render() {
        return (
            <Stack.Navigator {...this.props}>
                {Object.keys(stackNavigator).map((e, i) => {
                    return <Stack.Screen name={e} component={stackNavigator[e]} key={i.toString()}/>
                })}
            </Stack.Navigator>
        )
    }
}
