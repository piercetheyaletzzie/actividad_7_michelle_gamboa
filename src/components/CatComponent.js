import React from 'react'
import {Text, Image, View} from 'react-native'

const CatComponent = (props) => {
  return (
      <View>
    <Text>Gatito soy y me llamo {props.nombre} y soy raza {props.raza}</Text>
    <Image
    source={{uri: props.image}}
    style={{width: 200, height: 200}}
    ></Image>
    </View>
  )
}
export default CatComponent