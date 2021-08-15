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

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');

  const DATA = [
    {
      id: '1',
      title: 'Mercado',
      itens: [
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
    },
    {
      id: '2',
      title: 'Padaria',
      itens: [
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
      id: '3',
      title: 'Farmácia',
      itens: [
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

  const goToList = (item) => {
    saveItem(item);

  }

  const saveItens = async () => {
    try {
      await AsyncStorage.setItem('LIST', JSON.stringify(DATA))
    } catch (e) {
      Alert.alert(e)
    }
  }

  const saveItem = async (ListEdit) => {
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

  useEffect(() => {
    saveItens();
    GetAllList();
  });
  return (
    <View style={styles.container}>

      <FlatList data={DATA} showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItens} >
            <Text style={styles.listItensIcon} >
              <Icon style={[styles.icons, styles.iconsFavorite]} name="ios-star" color="#4F8EF7" />
            </Text>
            <Text style={styles.listItensText} >{item.title}</Text>
            <Text style={styles.listItensIcon} >
              <Icon style={styles.icons} onPress={() => goToList(item)} name="create-outline" color="#4F8EF7" />
            </Text>
          </View>
        )} />

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
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textStyle}>Nova Lista</Text>
        </Pressable>
      </View>

      {/* <Button style={{ marginTop: 30 }} onPress={showModal}>
                        Criar nova lista
                    </Button> */}
      {/* <Button style={{ marginTop: 30 }} onPress={GetItem}>
                        pega a lista
                    </Button> */}

      <View style={styles.menuBottom}>
        <Text style={styles.contentIcons}>
          <Text style={styles.iconsBottom}>
            <Icon style={styles.IconsFooter} name="home-outline" color="#4F8EF7" />
          </Text>
          <Text style={styles.iconsBottom}>
            <Icon style={styles.IconsFooter} name="add-circle-outline" color="#4F8EF7" />
          </Text>
          <Text style={styles.iconsBottom}>
            <Icon style={styles.IconsFooter} name="create-outline" color="#4F8EF7" />
          </Text>
        </Text>
      </View>

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