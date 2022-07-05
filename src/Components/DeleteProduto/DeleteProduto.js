import * as React from 'react';
import { TextInput, SafeAreaView, View, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import api from '../../services/api';
import SelectDropdown from 'react-native-select-dropdown';
import { ApiContext } from '../../context/ApiContext';


const DeleteProduto = (props) => {


    const [produto, setProduto] = React.useState([]);
    
    //MODAL---
    const [modalVisible, setModalVisible] = React.useState(false);
    //--------

    const deletarProduto = async() => {
        const { data: produtoExcluido } = await api.delete(`/produtos/${props.id}`)
        const produtosFiltrados = produto.filter( prod => prod.id !== produtoExcluido.id)
        setProduto(produtosFiltrados);
        
        alert("Produto deletado com sucesso!")
        props.navigation.goBack('Home')
    }

    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>  
                        <Text>Deseja deletar {props.nome}?</Text>        
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={deletarProduto}
                        >
                            <Text style={styles.textStyle}>Deletar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Deletar</Text>
            </Pressable>
        </View>
    )
}

export default DeleteProduto;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 65,
    },
    modalView: {
        margin: 20,
        backgroundColor: "grey",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        width: "100%",
        backgroundColor: "#181818",
        height: 50,
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        padding: 5,
        color: "white",
        fontWeight: "bold",
        alignSelf: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
});