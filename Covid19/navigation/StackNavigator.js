import * as React from "react"
import {createStackNavigator} from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";

// ------------- All Screens ------------- //
const stackNavigator = {
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
