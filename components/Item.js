import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const Item = ({ text, item, setItem, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    const updatedItems = items.map((i) =>
      i === item ? { ...i, text: editText } : i
    );
    setItems(updatedItems);
    setIsEditing(false);
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.editBtn} onPress={handleEditPress}>
        <Icon name="pencil" size={30} color="#000" />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TouchableOpacity onPress={handleSavePress}>
            <Icon name="check" size={30} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={styles.input}
            value={editText}
            onChangeText={setEditText}
          />
          
        </>
        
      ) : (
        <Text style={styles.itemText}>{text}</Text>
      )}
      

      <TouchableOpacity>
        <View style={styles.square}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: "row",
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgb(252 211 77)",
    opacity: 0.4,
    borderRadius: 4,
    borderColor: "rgb(252 211 77)",
    marginRight: 15,
  },
  itemText: {
    fontSize: 15,
  },
  editBtn: {
    marginRight: 10,
  },
  input: {
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
  },
});

export default Item;
