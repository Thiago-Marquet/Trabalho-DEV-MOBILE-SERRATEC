import { useIsFocused } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, View, ScrollView, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import DeleteProduto from '../../Components/DeleteProduto/DeleteProduto';
import UpdateProduto from '../../Components/UpdateProduto/UpdateProduto';
import ImagedCarouselCard from "react-native-imaged-carousel-card";

const PageProduto = ({ route,navigation }) => {

    const { produto } = route.params
    const focado = useIsFocused();

    React.useEffect(() => {
        produto
    }, [focado]);

    return (
        <>
            <ScrollView style={styles.container}>
                <View style={styles.containerProduto}>
                    <Image style={styles.foto} source={produto.foto ? {uri: produto.foto} : null}></Image>
                    <Text style={styles.text}>PRODUTO: {produto.nome}</Text>
                    <Text style={styles.text}>VALOR: R$ {produto.valorUnitario}</Text>
                    <Text style={styles.text}>CATEGORIA: {produto.categoria.nome}</Text>
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
            </ScrollView>
        </>
    )
}

export default PageProduto;

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#181818',
        height: "100%",
        padding: 10,
    },
    containerProduto:{
    
    },
    foto:{
        borderStyle: 'solid', 
        borderColor: '#FF5500', 
        borderWidth: 3,
        alignSelf: 'center',
        height: 300, 
        width: 300,
        marginBottom: 15
    },
    text:{
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        letterSpacing: 2
    }
});