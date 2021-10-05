import React, { useState, useEffect } from "react";

import {
  FlatList, 
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Modal,
  Pressable,
  Alert,
  TextInput,
} from "react-native";

import { AsyncStorage } from "react-native";


import { Actions } from 'react-native-router-flux'
import { Product } from "../../models/Produto.model";
import { Type } from "../../models/Type.model";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  
  const prd1: Product[] = [];
  const prd2: Product[] = [];
  const prd3: Product[] = [];
  const list: Type[] = [];

  prd1.push({
    Title: "Milho",
    Quantity: 1,
    Unity: ''
  } as Product);

  prd2.push({
    Title: 'Pães',
    Quantity: 6,
    Unity: ''
  } as Product);

  prd3.push({
    Title: 'Paracetamol',
    Quantity: 1,
    Unity: 'cx'
  } as Product);

  const shops1: Type = {
    id: 1,
    title: 'Mercado',
    periodicity: 'm',
    products: prd1
  } as Type;

  const shops2: Type = {
    id: 2,
    title: 'Padaria',
    periodicity: 'semanal',
    products: prd2
  } as Type;

  const shops3: Type = {
    id: 3,
    title: 'Farmácia',
    periodicity: 'semanal',
    products: prd3
  } as Type;

  list.push(shops1)
  list.push(shops2)
  list.push(shops3);



  const goToList = (item: Type) => {
    saveItem(item);
  }

  const saveItem = async (ListEdit: Type) => {
    let jsonText = JSON.stringify(ListEdit);
    try {
      await AsyncStorage.setItem('LIST_CURRENT', jsonText);
      Actions.list();
    } catch (e) {
      Alert.alert("Erro ao salvar a lista");
    }
  }

  
  // const GetAllList = async () => {
  //   try {
  //     const teste = await AsyncStorage.getItem('LIST');
  //   } catch (e) {
  //     Alert.alert(e)
  //   }
  // }

  useEffect(() => {

  });
  
  return (
    <View>
      {list && (
        <SafeAreaView>
          <FlatList
            data={list}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>{item.title}</Text>
                  <TouchableOpacity onPress = {() => goToList(item)}>
                    <Text>lista</Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </SafeAreaView>
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
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {

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

export default Home;