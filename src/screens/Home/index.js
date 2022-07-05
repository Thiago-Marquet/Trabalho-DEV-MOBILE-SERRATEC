import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import  {ApiContext}  from '../../context/ApiContext';


const Home = ({ navigation }) => {

  const {produto, getProduto} = React.useContext(ApiContext);
  const isFocused = useIsFocused();

  React.useEffect(() => {
    getProduto();
  }, [isFocused]);

  const Item = ({ title, img, valor, categoria, produto}) => (
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
      <Item produto={item} title={item.nome} img={item.foto} valor={item.valorUnitario} categoria={item.categoria.nome} />
    </>
  );

  return (
    <>
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
