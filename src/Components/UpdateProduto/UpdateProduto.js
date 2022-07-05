import * as React from 'react';
import { TextInput, SafeAreaView, View, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import api from '../../services/api';
import SelectDropdown from 'react-native-select-dropdown';
import { ApiContext } from '../../context/ApiContext';
import RNRestart from 'react-native-restart';


const UpdateProduto = (props,{navigation}) => {

    const{getProduto,categorias, getCategoria} = React.useContext(ApiContext)

    const [categoria, setCategoria] = React.useState('');
    const [nomeProduto, setNomeProduto] = React.useState('');
    const [valor, setValor] = React.useState('');
    const [foto, setFoto] = React.useState('');
    const [id, setId] = React.useState(props.id);
    const [produto, setProduto] = React.useState([]);
    
    //MODAL---
    const [modalVisible, setModalVisible] = React.useState(false);
    //--------

    const salvarProduto = async() => {
        const produtoData = {
            id: id,
            nome: nomeProduto,
            valorUnitario: valor,
            categoria:categoria,
            foto: foto
        }
    
        const { data } = await api.put(`/produtos/${props.id}`, produtoData)
    
        const produtoEditado = produto.map( produto => {
          if(produto.id === data.id) {
            return {
              id: produto.id,...produtoData
            }
          }
          return produto
        })
    
        setProduto(produtoEditado)
        console.log(produtoEditado)
        
        alert("Produto atualizado com sucesso")

    }

    React.useEffect(() => {
        getCategoria()
        setId(props.id);
        setNomeProduto(props.nome);
        setValor(props.valor);
        setFoto(props.foto);
    }, []);


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
                        <Text style={styles.modalText}>Atualizar Produto</Text>
                        <View style={{height: 250, width: 300, backgroundColor: 'white'}}>
                            <Image source={{uri : foto}} style={{height: 250, width: 250}}/>
                        </View>
                        <TextInput defaultValue={props.nome}
                            onChangeText={setNomeProduto}
                            maxLength={40} 
                            style={{backgroundColor: 'white', 
                            width:300, 
                            padding: 5}}>
                        </TextInput>
                        <TextInput
                            onChangeText={setValor}
                            keyboardType='numeric'
                            style={{backgroundColor: 'white', 
                            width:300, 
                            padding: 5}}
                        >
                        </TextInput>
                        <TextInput defaultValue={props.foto}
                            onChangeText={setFoto}
                            style={{backgroundColor: 'white', 
                            width:300, 
                            padding: 5}}
                        >
                        </TextInput>
                        <SelectDropdown
                            buttonStyle={{width:300, backgroundColor:'#181818'}}
                            buttonTextStyle={{color:'#ffff'}}
                            defaultValue={categoria}
                            defaultButtonText="Selecione A Categoria"
                            data={categorias}
                            onSelect={(selectedItem) => {
                                console.log(selectedItem.nome)
                                setCategoria(selectedItem.nome)
                            }}
                            buttonTextAfterSelection={(selectedItem) => {
                                return selectedItem.nome
                            }}
                            rowTextForSelection={(item) => {
                                return item.nome
                            }}
                        >
                        </SelectDropdown>
                        
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={salvarProduto}
                        >
                            <Text style={styles.textStyle}>Salvar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Atualizar</Text>
            </Pressable>
        </View>
    )
}

export default UpdateProduto;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop:65,
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