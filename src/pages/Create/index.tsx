import React, { useState } from "react";

import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Button, Alert } from "react-native";

import { TextInput, List, Provider as PaperProvider } from 'react-native-paper';

const DATA = [
    {
        id: "1",
        title: "First Item",
    },
    {
        id: "2",
        title: "Second Item",
    },
    {
        id: "3",
        title: "Third Item",
    },
];

const Item = ({ item, onPress, style }: any) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const App = () => {

    const [selectedId, setSelectedId] = useState(null);
    const [text, setText] = React.useState('');

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    return (
        <SafeAreaView style={styles.container}>
            <PaperProvider >

                <TextInput
                    style={styles.inputItens}
                    label="Add Item"
                    onChangeText={text => setText(text)}
                />

                <Button
                    title="Salvar"
                    onPress={() => Alert.alert('Simple Button pressed')} />
                <List.Item
                    title="First Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                    title="First Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
                <List.Item
                    title="First Item"
                    description="Item description"
                    left={props => <List.Icon {...props} icon="folder" />}
                />
            </PaperProvider>
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
    inputItens: {
        marginBottom: 12,
    }
});

export default App;