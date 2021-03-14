import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import Carousel from 'react-native-snap-carousel'
import { Actions } from 'react-native-router-flux'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/CarouselCardItem'
import data from '../../data/data'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)
  const goToList = () => {
     Actions.list()
  }  

  return (
    <View
    style={{
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    }}>

      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
      />
       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToList}>
         <Text>List</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

 });

export default CarouselCards