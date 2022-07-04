import { createDrawerNavigator } from "@react-navigation/drawer";
import CadastroProduto from "../screens/CadastroProduto";
import Home from "../screens/Home";
import PageProduto from "../screens/Produto";
import RotasPrivadas from "./RotasPrivadas";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Produto" component={PageProduto} options={{drawerItemStyle:{display: 'none'}}}/>
      <Drawer.Screen name="Cadastrar Produto" component={CadastroProduto} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
