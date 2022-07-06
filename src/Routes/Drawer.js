import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useIsFocused, StackActions } from "@react-navigation/native";
import React, { useContext } from "react";
import { color } from "react-native-reanimated";
import { AuthContext } from "../context/AuthContext";
import CadastroProduto from "../screens/CadastroProduto";
import Home from "../screens/Home";
import Integrantes from "../screens/Integrantes";
import Login from "../screens/Login";
import PageProduto from "../screens/Produto";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

  const {setUser} = useContext(AuthContext);

  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {backgroundColor: '#181818',width: 240},
      drawerActiveBackgroundColor: '#FF5500',
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'white',
      headerStyle: {backgroundColor: "#FF5500"}, 
      headerTitleStyle: {color: 'white', fontSize: 26, letterSpacing: 2}
    }} 
      
      drawerContent={(props) => {return(
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem inactiveTintColor='white' label="LogOut" onPress={
          ()=> {
            AsyncStorage.removeItem('@Admin:user')
            AsyncStorage.removeItem('@Admin:token')
            setUser('');
          }
        }/>  
      </DrawerContentScrollView>
    )}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cadastrar Produto" component={CadastroProduto}/>
      <Drawer.Screen name="Integrantes" component={Integrantes}/>
    </Drawer.Navigator>
  );
};

export default MyDrawer;
