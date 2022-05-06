import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";

import Profile from "../screens/Profile"
import TabNavigator from "../components/TabNavigator";
import StackNavigator from "./StackNaviagtor"

const Drawer = createDrawerNavigator()

const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
       <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  )
}
export default DrawerNavigator;