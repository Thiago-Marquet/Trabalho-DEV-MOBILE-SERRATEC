import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, Alert, TouchableOpacity } from 'react-native';
import { ContextProduto } from '../../context/ProdutoContext';

const PageProduto = ({route}) =>{

    const {produto} = route.params
    // const {produto,id} = React.useContext(ContextProduto)
    console.log(produto)
    return(
        <View>
            <Image style={{height:200, width: 200}}source={{uri:produto.foto}}></Image>
            <Text>{produto.nome}</Text>
            <Text>R$ {produto.valorUnitario}</Text>
            <Text>{produto.categoria.nome}</Text>
        </View>
    )
}

export default PageProduto;