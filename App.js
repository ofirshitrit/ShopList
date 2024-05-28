import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import Item from './components/Item';
import AddItem from './components/AddItem';

export default function App() {

  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  const title = "רשימת הקניות שלי"

  return (
    <View style={styles.container}>
      
      <View style={styles.itemsWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.items}>
          {
            items.map((item, index) => {
              return (
                <Item key={index} text={item} item={item} setItem={setItem} items={items} setItems={setItems} />
              )
            })
          }
        </View>
      </View>
        <AddItem item={item} setItem={setItem} items={items} setItems={setItems} />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(207 250 254)',
   
  },
  itemsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titleWrapper: {
    padding: 5,
    backgroundColor: "rgb(14 116 144)",
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: "Times New Roman",
    color: '#FFFFFF'
    

  },
});
