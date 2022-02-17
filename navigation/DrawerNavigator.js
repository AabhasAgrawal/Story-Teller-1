import React from 'react ';
import{createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from "../TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=>{
return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" companent={TabNavigator}/>
        <Drawer.Screen name="Profile" companent={Profile}/>
        </Drawer.Navigator>
)}

export default DrawerNavigator 