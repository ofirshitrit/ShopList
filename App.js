import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from "react";
import Item from './components/Item';
import AddItem from './components/AddItem';

export default function App() {

  const [item, setItem] = useState();
  const [items, setItems] = useState([]);


  const removeItem = (index) => {
    let itemsCopy = [...items]
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemsWrapper}>
        <Text style={styles.title}>רשימת הקניות שלנו</Text>
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
    backgroundColor: 'rgb(254 243 199)',
   
  },
  itemsWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
    fontFamily: "Helvetica",
  },
});
