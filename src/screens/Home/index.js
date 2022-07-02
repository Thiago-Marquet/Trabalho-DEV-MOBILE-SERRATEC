import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Alert } from 'react-native';
import MenuMain from '../../Menu';
import axios from 'axios'

const Item = ({ title, img, valor, categoria }) => (
  <View style={styles.item} onPress={() => Alert.alert("click")}>
    <Image style={{height: 200, width: 200}} source={{uri: img}}></Image>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>R$ {valor}</Text>
    <Text style={styles.title}>{categoria}</Text>
  </View>
);

const Home = () => {

  const [produto, setProduto] = React.useState([])

  const getProduto = async () =>{
    const {data} = await axios.get("http://localhost:8080/produtos")
    setProduto(data)
    console.log(produto)
  }

  React.useEffect(() => {
    getProduto();
  }, []);

  const renderItem = ({ item }) => (
    <>
      <Item title={item.nome} img={item.foto} valor={item.valorUnitario} categoria={item.categoria.nome}/>
    </>
  );

  return (
    <>
      {/* <MenuMain/> */}
      <SafeAreaView style={styles.container}>
        <FlatList
          data={produto}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
