import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Item = ({ text, item, setItem, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditPress = () => {
    setIsEditing(true);
  };

  const handleSavePress = () => {
    setItem({ ...item, text: editedText });
    setIsEditing(false);
  };

  const handleInputChange = (inputText) => {
    setEditedText(inputText);
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
            value={editedText}
            onChangeText={handleInputChange}
          />
        </>
      ) : (
        <Text style={styles.itemText}>{editedText}</Text>
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
    borderBottomColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
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
    fontSize: 20,
    fontWeight: 'bold',

  },
  editBtn: {
    marginRight: 10,
  },
  input: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#D2691E",
    fontWeight: 'bold',
  },
});

export default Item;
