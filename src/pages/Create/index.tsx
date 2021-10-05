import React, { useState, useEffect } from "react";

import { AsyncStorage, FlatList, StyleSheet, Text, TouchableOpacity, Button, View, Alert, TextInput, SafeAreaView} from "react-native";

import { Product } from "../../models/Produto.model";
import { Type } from "../../models/Type.model";

const App = () => {

    const [listProduct, setListProduct] = React.useState<Product[]>([]);
    const [listItens, setListItens] = React.useState<Type[]>([]);
    const [textTitle, setTextTitle] = React.useState("");


    // const addToList = () => {
    //     var keyAux = ++key;
    //     list.push({ text: text.toString(), key: keyAux.toString() });
    //     setList([...list]);
    // }

    // const makeListEdition = async (listas) => {
    //   console.log(JSON.parse(listas.toString()));
    //   await setList(JSON.parse(listas.toString()));
    //   console.log(JSON.parse(listas.toString()));
    // }

    const GetItemList = async () => {
      try {
        const listCurrent = await AsyncStorage.getItem('LIST_CURRENT');
        await AsyncStorage.removeItem('LIST_CURRENT');
        await AsyncStorage.clear();
        if(listCurrent != null) {
          let resp = JSON.parse(listCurrent);
          console.log(resp)
          setListProduct(resp.products)
          setTextTitle(resp.title);
        }
        
        
      //   AsyncStorage.removeItem('LIST_CURRENT');
      //   makeListEdition(listCurrent);
      } catch (e) {
        Alert.alert("Erro ao Buscar Lista")
      }
    }
  useEffect(() => {
    GetItemList();
  });

    return (

      <View>
        <Text>
        { textTitle && ( textTitle )}
        </Text>

      { listProduct && (
        <FlatList data={listProduct} showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.listItens} >
      
              <Text >{item.Title}</Text>
     
            </View>
          )} />
      )}

          
            {/* <SafeAreaView style={styles.contentViewInput}>
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

            <View style={styles.box}> */}
                {/* <View style={styles.contentView}>
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
            </View> */}


        </View>)

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