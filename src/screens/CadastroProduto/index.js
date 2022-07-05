import * as React from 'react'
import { TextInput } from "react-native-gesture-handler";
import { ApiContext } from '../../context/ApiContext';
import api from "../../services/api";
import SelectDropdown from 'react-native-select-dropdown';
import { View, Image, Button, Alert } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const CadastroProduto = ({navigation}) =>{

    const{categorias, getCategoria} = React.useContext(ApiContext)

    const [categoria, setCategoria] = React.useState('');
    const [nomeProduto, setNomeProduto] = React.useState('');
    const [valor, setValor] = React.useState('');
    const [foto, setFoto] = React.useState('');

    const [produto, setProduto] = React.useState([]);
    const isFocused = useIsFocused();

    const createProduto = async () => {
        if (nomeProduto === "" || valor === "" || foto === "" || categoria === "") {
            return Alert.alert('Existem campos inválidos')
        }
        if(isNaN(valor)){
            return Alert.alert('O valor do produto não está em formato válido');
        }
        const novoProduto = {
            nome: nomeProduto,
            valorUnitario: valor,
            categoria: categoria,
            foto: foto
        }
        alert("Produto cadastrado com sucesso");
        const { data } = await api.post('/produtos', novoProduto)

        setProduto([...produto, data])

        setNomeProduto('')
        setValor('')
        setFoto('')
        setCategoria('')

        navigation.goBack('Home')
    }

    React.useEffect(() => {
        getCategoria()
        console.log(nomeProduto)
    }, [isFocused]);

    return(
        <View style={{}}>
            <Image source={ foto ? {uri: foto} : null} style={{ height: 250, width: 250 }} />
            <TextInput placeholder='Nome do Produto' defaultValue={nomeProduto} onChangeText={setNomeProduto}></TextInput>
            <TextInput keyboardType='numeric' defaultValue={valor} onChangeText={setValor} placeholder='Valor do produto'></TextInput>
            <TextInput placeholder='Foto URL' defaultValue={foto} onChangeText={setFoto}></TextInput>
            <SelectDropdown
                buttonStyle={{ width: 300, backgroundColor: '#181818' }}
                buttonTextStyle={{ color: '#ffff' }}
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
            <Button title='Cadastrar' onPress={createProduto}></Button>
        </View>
    )


}

export default CadastroProduto;