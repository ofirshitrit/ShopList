import React, { Component } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
  Keyboard,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ item, setItem, items, setItems }) => {
  const handleAddItem = () => {
    if (item && typeof item === 'string' && item.trim() !== "") {
      setItems([...items, item.trim()]);
      setItem(null);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeItemWrapper}
    >
      <TouchableOpacity onPress={handleAddItem} style={styles.addWrapper}>
        <Icon name="plus" size={22} color="rgb(14 116 144)" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder={"הוסף מוצר חדש"}
        value={item}
        onChangeText={(text) => setItem(text)}
      ></TextInput>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  writeItemWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "rgb(224 242 254)",
    borderRadius: 60,
    borderColor: "rgb(14 116 144)",
    borderWidth: 3,
    width: 250,
    textAlign: "right",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "rgb(224 242 254)",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgb(14 116 144)",
    borderWidth: 3,
  },
  addText: {
   fontSize: 24,
   fontWeight: 'bold',
   fontFamily: "Times New Roman",
   
  },
});

export default AddItem;
