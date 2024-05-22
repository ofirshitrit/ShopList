import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


const Item = (props) => {
  return (
    <View style={styles.item}>
        {/* <View style = {styles.square}></View> */}
        <Text style = {styles.itemText}>{props.text}</Text>
        {/* <Image ></Image> */}
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'rgb(252 211 77)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    // width: 100,
    // height:100,
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
    // alignItems: 'center',
    // flexWrap: 'wrap'
  },
  // square:{
  //   width: 24,
  //   height: 24,
  //   backgroundColor: '#55BCF6',
  //   opacity: 0.4,
  //   borderRadius: 4,
  //   marginRight: 15,

  // },
  
  itemText:{
    fontSize: 25,
    maxWidth: '90%',
    textAlign: 'right',
    // textAlign: 'center',
    fontFamily: 'ui-monospace'
    
    


  },
  

});

export default Item;