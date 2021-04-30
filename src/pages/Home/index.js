import * as React from 'react';
import { Modal, Portal, Text, Button, List, Provider } from 'react-native-paper';

import {  StyleSheet, StatusBar, Alert   } from "react-native";

import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'


// import Carousel from 'react-native-snap-carousel'
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/CarouselCardItem'
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import data from '../../data/data'

const Home = () => {

    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);

    let data_object = {
        data: '2018-08-01',
        local: 'Rua ...',
        humidade: 40,
    };
    
    var data = null;
    
    const isCarousel = React.useRef(null)

    const goToList = () => {
        Actions.list()
    }  

    const saveItem = async () => {
        try {
            await AsyncStorage.setItem('TESTE', 'OI')
        } catch (e) {
            Alert.alert(e)
        }
    }

    const GetItem = async () => {
        try {
            const teste = await  AsyncStorage.getItem('list');
            console.log(teste)
            if (teste !== null){
                Alert.alert(String(teste));
            }
        } catch (e) {
            Alert.alert(e)
        }
   } 

    return (
                <Provider>
                    <List.Section style={styles.sectionList} title="Minhas Listas">
                    <List.Item
                        title="First Item"
                        onPress={goToList}
                        description="Item description"
                        left={props => <List.Icon {...props} icon="folder" />}
                    />
                    <List.Item
                        title="First Item"
                        onPress={goToList}
                        description="Item description"
                        left={props => <List.Icon {...props} icon="folder" />}
                    />
                    </List.Section>  
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                            <Text>Example Modal.  Click outside this area to dismiss.</Text>
                        </Modal>
                    </Portal>
                    <Button style={{ marginTop: 30 }} onPress={showModal}>
                        Criar nova lista
                        </Button>
                </Provider>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: StatusBar.currentHeight || 0,
    },
    iconList: {
        backgroundColor: '#dfdac8',
        borderRadius: 25,
    },
    sectionList: {
        marginBottom: 10
    }
 });

export default Home