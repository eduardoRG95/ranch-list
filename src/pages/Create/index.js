import React, { useState, useEffect } from "react";

import { AsyncStorage } from 'react-native';

import { StatusBar, FlatList, StyleSheet, Text, TouchableOpacity, Button, View, Alert } from "react-native";

import { TextInput } from 'react-native-paper';

const App = () => {

    const [text, setText] = React.useState('');
    const [list, setList] = useState([]);

    let key = list.length;

    function addToList() {
        var keyAux = ++key;
        list.push({ text: text.toString(), key: keyAux.toString() });
        setList([...list]);
    }


    const GetItem = async () => {
        try {
            console.log("teste")
            const teste = await AsyncStorage.getItem('list');
            console.log(teste)
            if (teste !== null) {
                Alert.alert(String(teste));
            }
        } catch (e) {
            Alert.alert(e)
        }
    }

    const SaveList = async () => {
        try {
            await AsyncStorage.setItem('list', JSON.stringify(list));
        } catch (e) {
            Alert.alert(e)
        }
    }



    return (
        <View style={styles.container}>

            <View>
                <TextInput
                    style={styles.inputItens}
                    label="Add Item"
                    value={text}
                    onChangeText={text => setText(text)}
                />
            </View>

            <View style={styles.box}>

                <Button
                    style={styles.button}
                    title="+"
                    onPress={() => addToList()} />

                <Button
                    style={styles.button}
                    title="Salvar Lista"
                    onPress={() => SaveList()} />


                <Button
                    style={styles.button}
                    title="get"
                    onPress={() => GetItem()} />

            </View>

            <FlatList data={list} style={styles.listItens} showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Text style={styles.textItens}>{item.text}</Text>
                )} />

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 8,
        paddingLeft: 5,
        paddingRight: 5
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginRight: 5,
        width: '100%'

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
    }
});


export default App;