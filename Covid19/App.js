/*
  This app is for to inform about Covid19.

  Developer : Mehmet Ali Yılgın
  Contact:
      email: mehmetaliyilginoffical@gmail.com
      linkedin: https://www.linkedin.com/in/mehmetaliyilginoffical/
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import StackNavigator from "./navigation/StackNavigator";
// ------------- All Screens ------------- //
import Home from './screens/HomeScreens/Home/Home';

function App(){
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <SafeAreaView style={{flexGrow:1}}>
                    <StackNavigator headerMode={'none'} initialRouteName={'Home'}/>
                </SafeAreaView>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}

export default App;
