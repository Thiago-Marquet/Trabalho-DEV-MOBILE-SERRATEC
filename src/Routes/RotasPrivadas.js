import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import Home from "../screens/Home";
import MyDrawer from "./Drawer";
import PageProduto from "../screens/Produto";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={MyDrawer}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: true}}
      />
      <Stack.Screen
        name="PagProduto"
        component={PageProduto}
        options={{ headerShown: true, title: 'Produto' }}
      />
  </Stack.Navigator>
  );
};

export default RotasPrivadas;
