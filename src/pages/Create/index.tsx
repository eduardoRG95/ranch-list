import React, { useState } from "react";

import { SafeAreaView, StatusBar, ScrollView,  StyleSheet, Text, TouchableOpacity, Button, Alert } from "react-native";

import { TextInput, List, Provider as PaperProvider } from 'react-native-paper';

const Item = ({ item, onPress, style }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {
    
    const arrayItens = [
        {
            title: "First Item",
        },
        {
            title: "Second Item",
        },
        {
            title: "Third Item",
        },
    ];

    const AddItemsToArray = () => {
        
        if(text != ''){

            const newObject = [{
                title: text
            }];
            const arrayResponse = [...newObject, ...arrayItensList];
            setArrayItensList(arrayResponse);
            setText('')
        }else {
            alert("Por favor escreva o nome do item a ser adcionado na lista :D")
        }

    }

    const ClearList = () => {
        
        setArrayItensList([]);
       

    }

    const [arrayItensList, setArrayItensList] = React.useState(arrayItens);

    const [text, setText]          = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <PaperProvider >

                <TextInput
                    style={styles.inputItens}
                    label="Add Item"
                    value={text}
                    onChangeText={text => setText(text)}
                />

                <Button
                    title="ADD"
                    onPress={() => AddItemsToArray()} />

                <Item />
                <ScrollView style={styles.container}>
                    {
                        arrayItensList.map((item) => (
                            <List.Item
                                key={item.title}
                                title={item.title}
                                left={props => <List.Icon {...props} icon="folder" />}
                                onPress={() => {
                                    Alert.alert("skin_color: " + item.title 
                                    );
                                }}                                
                            />
                        ))
                    }
                </ScrollView>
            </PaperProvider>
        
            <Button
                title="limpa lista"
                onPress={() => ClearList()} />
                
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: "#e5e5e5",
        borderBottomColor: "#333",
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 16,
    },
    delete: {
        marginTop: 3,
        backgroundColor: '#ff0000'
    },
    salvar: {

    },
    inputItens: {
        marginBottom: 12,
    }
});

export default App;