import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Home from "../screens/Home";
import MyDrawer from "./Drawer";
import PageProduto from "../screens/Produto";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  
  return (
    <MyDrawer/>
  );
};

export default RotasPrivadas;
