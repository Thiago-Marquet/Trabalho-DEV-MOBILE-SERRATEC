import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import DeleteProduto from '../../Components/DeleteProduto/DeleteProduto';
import UpdateProduto from '../../Components/UpdateProduto/UpdateProduto';

const PageProduto = ({ route,navigation }) => {

    const { produto } = route.params
    const focado = useIsFocused();

    React.useEffect(() => {
        produto
    }, [focado]);

    return (
        <>
            <View style={{ padding: 10}}>
                <View style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
                    <Image style={{ height: 300, width: 300 }} source={produto.foto ? {uri: produto.foto} : null}></Image>
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
                    navigation={navigation}
                />
                <DeleteProduto
                    nome={produto.nome}
                    id={produto.id}
                    navigation={navigation}
                />
            </View>
        </>
    )
}

export default PageProduto;

const styles = StyleSheet.create({
    
});