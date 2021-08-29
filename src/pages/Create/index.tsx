import React, { useState, useEffect } from "react";

import { AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, Button, View, Alert, TextInput, SafeAreaView} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {

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


    const [list, setList] = React.useState([]);
    const [text, onChangeText] = React.useState("");
    const [textTitle, setTextTitle] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    let key = list.length;

    const addToList = () => {
        var keyAux = ++key;
        list.push({ text: text.toString(), key: keyAux.toString() });
        setList([...list]);
    }

    const makeListEdition = async (listas) => {
      console.log(JSON.parse(listas.toString()));
      await setList(JSON.parse(listas.toString()));
      console.log(JSON.parse(listas.toString()));
    }

    const GetItemList = async () => {
      try {
        const listCurrent = await AsyncStorage.getItem('LIST_CURRENT');
        let resp = JSON.parse(listCurrent);
        console.log(resp)
        setTextTitle(resp.title)
        setList([...resp.itens]);
       // AsyncStorage.removeItem('LIST_CURRENT');
        // makeListEdition(listCurrent);
      } catch (e) {
        Alert.alert(e)
      }
    }
  useEffect(() => {
    GetItemList();
  });

    return (
      (list && <View style={styles.container}>

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
            <SafeAreaView style={styles.contentViewInput}>
               <TextInput
                    style={styles.input}
                    placeholder="Produto"
                    onChangeText={onChangeText}
                    value={textTitle}
                />
            </SafeAreaView>
            <SafeAreaView style={styles.contentViewInput}>
              <TextInput
                style={styles.input}
                placeholder="Produto"
                onChangeText={onChangeText}
                value={textTitle}
              />
            </SafeAreaView>

            <View style={styles.box}>
                <View style={styles.contentView}>
                    <Button
                        style={styles.button}
                        title="+"
                        onPress={() => addToList()} />
                </View>
                <View style={styles.contentView}>
                    <Button
                        style={styles.button}
                        title="Salvar Lista"
                        onPress={() => SaveList()} />
                </View>
            </View>
        {list && (<FlatList data={list} style={styles.listItens} showsVerticalScrollIndicator={false}
                renderItem={({ itens }) => (
                  <Text style={styles.textItens}>{itens.NomeProduto}</Text>
                )} /> )}

        </View>)
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        paddingLeft: 5,
        paddingRight: 20
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10

    },
    listItens:{
        marginTop: 20,
    },
    textItens:{
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 15
    },
    button: {
        width: 500,
        height: 100,
    },
    contentView: {
        width: 150
    },
     input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
    },
    contentViewInput: {
        width: "100%",
    }
});


export default App;