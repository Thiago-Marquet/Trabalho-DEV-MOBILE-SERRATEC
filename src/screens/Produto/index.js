import * as React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar,Modal ,Image, Pressable, Button, Text, Alert} from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

const PageProduto = ({ route, navigation }) => {

    const { produto } = route.params
    const [modalVisible, setModalVisible] = React.useState(false);

    const ModalUpdate = () => {
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
                            <TextInput placeholder='Nome do produto' 
                                maxLength={40} 
                                style={{backgroundColor: 'white', 
                                width:300, 
                                padding: 5}}>
                            </TextInput>
                            <TextInput></TextInput>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Fechar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
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
                {/* <Button title='Atualiza'onPress={setModalSalve(true)}></Button> */}
                <ModalUpdate/>
                {/* <View style={{ marginVertical: 8, borderBottomWidth: StyleSheet.hairlineWidth, }}></View> */}
                {/* <Button title="Deletar"></Button> */}
            </View>
        </>
    )
}

export default PageProduto;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
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