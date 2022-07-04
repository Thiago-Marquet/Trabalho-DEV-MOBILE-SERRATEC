import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import PageProduto from "../screens/Produto";
import RotasPrivadas from "./RotasPrivadas";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Produto" component={PageProduto} options={{headerShown: false,drawerItemStyle:{display: 'none'}}}/>
    </Drawer.Navigator>
  );
};

export default MyDrawer;
