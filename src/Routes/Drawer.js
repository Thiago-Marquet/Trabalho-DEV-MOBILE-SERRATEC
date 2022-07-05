import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useIsFocused, StackActions } from "@react-navigation/native";
import React, { useContext } from "react";
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
    <Drawer.Navigator drawerContent={(props) => {return(
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}/>
        <DrawerItem label="LogOut" onPress={
          ()=> {
            AsyncStorage.removeItem('@Admin:user')
            AsyncStorage.removeItem('@Admin:token')
            setUser('');
          }
        }/>  
      </DrawerContentScrollView>
    )}}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cadastrar Produto" component={CadastroProduto} />
      <Drawer.Screen name="Integrantes" component={Integrantes}/>
    </Drawer.Navigator>
  );
};

export default MyDrawer;
