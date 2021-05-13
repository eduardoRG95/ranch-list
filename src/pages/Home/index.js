import React, { useState, useEffect } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/Ionicons';



// import Carousel from 'react-native-snap-carousel'
// import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/CarouselCardItem'
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
// import data from '../../data/data'

const Home = () => {

    const [visible, setVisible] = React.useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const isCarousel = React.useRef(null)


    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];

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

    const GetAllList = async () => {
        try {
            const teste = await AsyncStorage.getAllKeys();
            console.log(teste)
            if (teste !== null){
                Alert.alert(String(teste));
            }
        } catch (e) {
            Alert.alert(e)
        }
   } 



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
                            <Icon style={styles.icons} name="create-outline" color="#4F8EF7" />
                        </Text>
                    </View>
                )} />
{/* 
                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
                            <Text>Insira um nome na sua lista</Text>
                            <TextInput
                                label="Nome da lista"
                            />
                            <Button >
                                Salvar Lista
                            </Button>
                        </Modal>
                    </Portal> */}
                    {/* <Button style={{ marginTop: 30 }} onPress={showModal}>
                        Criar nova lista
                    </Button> */}
                    {/* <Button style={{ marginTop: 30 }} onPress={GetItem}>
                        pega a lista
                     </Button> */}
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
            </View>
            )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
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
    }
 });

export default Home