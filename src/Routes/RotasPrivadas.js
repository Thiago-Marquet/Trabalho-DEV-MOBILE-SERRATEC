import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Game from "../screens/Game";
import MyDrawer from "./Drawer";
import Tab from "./Tab";
import PageProduto from "../screens/Produto";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={Tab}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{ title: "Título da Página" }}
      />
      <Stack.Screen
        name="PagProduto"
        component={PageProduto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;
