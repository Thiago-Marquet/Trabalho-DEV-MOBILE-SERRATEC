import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Alert, TouchableOpacity } from 'react-native';
import MenuMain from '../../Menu';
import axios from 'axios'
import ProdutoProvider, { ContextProduto } from '../../context/ProdutoContext';
import PageProduto from '../Produto';

const Home = ({ navigation }) => {

  const {produto, getProduto, id} = React.useContext(ContextProduto)
  console.log(produto)

  const irParaProduto = () => {
    navigation.navigate("PagProduto",{
      produto: produto
    })
  }

  React.useEffect(() => {
    getProduto();
  }, []);

  const Item = ({ title, img, valor, categoria, id,produto}) => (
    <TouchableOpacity value={produto} onPress={() => navigation.navigate("PagProduto",{
      produto: produto
    })} style={styles.item}>
      <Image style={{ height: 200, width: 200 }} source={{ uri: img }}></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>R$ {valor}</Text>
      <Text style={styles.title}>{categoria}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <>
      <Item produto={item} id={item.id} title={item.nome} img={item.foto} valor={item.valorUnitario} categoria={item.categoria.nome} />
    </>
  );

  return (
    <>
      {/* <MenuMain/> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={produto}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#C7CAC8',
    borderWidth: 1,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
