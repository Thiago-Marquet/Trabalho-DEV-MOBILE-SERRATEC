import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import UpdateProduto from '../../Components/UpdateProduto/UpdateProduto';

const PageProduto = ({ route, navigation }) => {

    const { produto } = route.params

    return (
        <>
            <Pressable style={{ backgroundColor: "#181818", height: 53 }} onPress={() => navigation.goBack("Home")}>
                <Text style={{ color: 'white', padding: 15 }}>Voltar</Text>
            </Pressable>
            <View style={{ padding: 10 }}>
                <View style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
                    <Image style={{ height: 300, width: 300 }} source={{ uri: produto.foto }}></Image>
                    <Text>{produto.nome}</Text>
                    <Text>R$ {produto.valorUnitario}</Text>
                    <Text>{produto.categoria.nome}</Text>
                </View>
                <UpdateProduto
                    nome={produto.nome}
                    valor={produto.valorUnitario}
                    categoria={produto.categoria.nome}
                    foto={produto.foto}
                    id={produto.id}
                />
            </View>
        </>
    )
}

export default PageProduto;

const styles = StyleSheet.create({
    
});