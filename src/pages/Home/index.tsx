import React, { useState, useEffect } from "react";

import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  TextInput
} from "react-native";

import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';
import { Produto } from "../../models/Produto.model";
import { Type } from "../../models/Type.model";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState<Type[]>([]);
  const [text, setText] = useState('');

  const DATA = [
    {
      id: 1,
      title: 'Mercado',
      produtos: [
        {
          NomeProduto: 'Milho',
          Quantidade: 1,
          unidade: ''
        },
        {
          NomeProduto: 'Ervilha',
          Quantidade: 2,
          unidade: ''
        },
      ]
    } ,
    {
      id: 2,
      title: 'Padaria',
      produtos: [
        {
          NomeProduto: 'Pães',
          Quantidade: 6,
          unidade: ''
        },
        {
          NomeProduto: 'Sonho',
          Quantidade: 2,
          unidade: ''
        },
      ]
    },
    {
      id: 3,
      title: 'Farmácia',
      produtos: [
        {
          NomeProduto: 'Paracetamol',
          Quantidade: 1,
          unidade: 'cx'
        },
        {
          NomeProduto: 'Eno',
          Quantidade: 1,
          unidade: 'Sachê'
        },
      ]
    },
  ];

  const goToList = (item: any) => {
    saveItem(item);

  }

  const saveItens = async () => {
    try {
      await AsyncStorage.setItem('LIST', JSON.stringify(DATA))
    } catch (e) {
      Alert.alert(e)
    }
  }

  const saveItem = async (ListEdit: any) => {
    try {
      await AsyncStorage.setItem('LIST_CURRENT', JSON.stringify(ListEdit))
      Actions.list();
    } catch (e) {
      Alert.alert(e)
    }
  }

  
  const GetAllList = async () => {
    try {
      const teste = await AsyncStorage.getItem('LIST');
    } catch (e) {
      Alert.alert(e)
    }
  }

  const makeListIniciate = async (data: any) => {
    let listFormated: Type[] = [];
    let Listprod: Produto[];
    let prod: Produto;
    let lista: Type;
    data.forEach((element: any) => {
      console.log("teste 1", element);

      element.itens.forEach((x: any) => {
        prod = {
          NomeProduct: x.NomeProduto,
          Quantidade: x.Quantidade,
          Unidade: x.unidade
        };
        Listprod.push(prod);
      });
      console.log("teste 2", Listprod);
      lista = {
        id: Number(element.id),
        title: element.title.toString(),
        produtos: Listprod,
      }
      listFormated.push(lista);
    });
    setList(listFormated);
  }

  useEffect(() => {
    makeListIniciate(DATA);
    saveItens();
    GetAllList();
  });
  return (
    <View style={styles.container}>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate!"
                onChangeText={text => setText(text)}
                defaultValue={text}
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Nova Lista</Text>
        </Pressable> */}
      </View>

      {/* <Button style={{ marginTop: 30 }} onPress={showModal}>
                        Criar nova lista
                    </Button> */}
      {/* <Button style={{ marginTop: 30 }} onPress={GetItem}>
                        pega a lista
                    </Button> */}


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  listItens: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10
  },
  listItensText: {
    flex: 4,
    fontSize: 22,
    marginBottom: 8,
    marginRight: 30
  },
  listItensIcon: {
    flex: 1,
    justifyContent: "space-between"
  },
  icons: {
    fontSize: 30,
    display: "flex",
    color: "#0239ae",
    marginRight: 10
  },
  iconsFavorite: {
    color: "#d0d0d0"
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  menuBottom: {
    backgroundColor: "#eae6e6",
    position: "absolute",
    bottom: 0,
    height: "10%",
    width: "100%",
    flex: 1,
  },

  //icons footter
  contentIcons: {
    display: "flex",
    backgroundColor: "#dedede",
    justifyContent: "space-evenly",
    paddingLeft: 10,
    paddingRight: 10
  },
  iconsBottom: {
  },
  IconsFooter: {
    fontSize: 28
  },

  //modal
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#00a524",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Home