import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import CadastroProduto from "../screens/CadastroProduto";
import Home from "../screens/Home";
import Login from "../screens/Login";
import PageProduto from "../screens/Produto";
import RotasPrivadas from "./RotasPrivadas";
import RotasPublicas from "./RotasPublicas";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Produto" component={PageProduto} options={{drawerItemStyle:{display: 'none'}}}/>
      <Drawer.Screen name="Cadastrar Produto" component={CadastroProduto} />
      <Drawer.Screen name="LogOut" component={Home} options={{headerShown: false}} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
