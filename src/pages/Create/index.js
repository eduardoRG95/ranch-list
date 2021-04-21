import React, { useState, useEffect } from "react";

import { AsyncStorage } from 'react-native';

import { StatusBar, FlatList, StyleSheet, Text, TouchableOpacity, Button, View } from "react-native";

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
        // try {
        //     const teste = await AsyncStorage.getItem('TESTE');
        //     if (teste !== null) {
        //         Alert.alert(String(teste));
        //     }
        // } catch (e) {
        //     Alert.alert(e)
        // }
    }

    const SaveList = () => {


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

            <Button
                title="+"
                onPress={() => addToList()} />

            <Button
                title="Salvar Lista"
                onPress={() => SaveList()} />


            <FlatList data={list} showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Text>{item.text}</Text>
                )} />

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
    },
});


export default App;