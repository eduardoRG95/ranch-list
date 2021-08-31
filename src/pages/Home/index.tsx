import React, { useState, useEffect } from "react";

import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Item,
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
  
  const prd1: Produto[] = {
    name: 'Milho',
    Quantidade: 1,
    unidade: ''
  };

  const prd2: Produto[] = {
    name: "Pães",
    Quantidade: 6,
    unidade: ''
  };

  const prd3: Produto[] = {
    name: 'Paracetamol',
    Quantidade: 1,
    unidade: 'cx'
  };

  const shops1: Type = {
    id: 1,
    title: 'Mercado',
    periodicity: 'm',
    products: prd1
  };
  const shops2: Type = {
    id: 2,
    title: 'Padaria',
    periodicity: 'semanal',
    products: prd2
  };

  const shops3: Type = {
    id: 3,
    title: 'Farmácia',
    periodicity: 'semanal',
    products: prd3
  };




  const goToList = (item: any) => {
    saveItem(item);

  }

  // const saveItens = async () => {
  //   try {
  //     await AsyncStorage.setItem('LIST', JSON.stringify(DATA))
  //   } catch (e) {
  //     Alert.alert(e)
  //   }
  // }

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
  const renderItem = (shops: Type) => (
    <Item title={shops.title} />
  );

  useEffect(() => {
    setList([shops1, shops2, shops3])
  });
  return (
    <View style={styles.container}>
      {list && (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={Item => Item.id}
        />
      )}
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