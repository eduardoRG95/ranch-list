import React, { useState, useEffect } from "react";

import { AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, Button, View, Alert, TextInput, SafeAreaView} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';


const App = () => {

    const [list, setList] = useState({});

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    let key = list.length;

    const addToList = () => {
        var keyAux = ++key;
        list.push({ text: text.toString(), key: keyAux.toString() });
        setList([...list]);
    }

    const makeListEdition = async (listas: any) => {
      let parsed = JSON.parse(listas.toString());
      console.log(parsed)
      await setList(parsed);
      console.log(list);
    }

    const GetItemList = async () => {
      try {
        const listCurrent = await AsyncStorage.getItem('LIST_CURRENT');
        AsyncStorage.removeItem('LIST_CURRENT');
        makeListEdition(listCurrent);
      } catch (e) {
        Alert.alert(e)
      }
    }

    // const SaveList = async () => {
    //     try {
    //         await AsyncStorage.setItem('list', JSON.stringify(list));
    //     } catch (e) {
    //         Alert.alert(e)
    //     }
    // }
  useEffect(() => {
    GetItemList();
  });

    return (
      (list && <View style={styles.container}>
            <SafeAreaView style={styles.contentViewInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Produto"
                    onChangeText={onChangeText}
                    value={text}
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