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

const AddItem = ({ item, setItem, items, setItems }) => {
  const handleAddItem = () => {
    setItems([...items, item]);
    setItem(null);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeItemWrapper}
    >
      <TouchableOpacity onPress={handleAddItem}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
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
    backgroundColor: "rgb(253 230 138)",
    borderRadius: 60,
    borderColor: "rgb(252 211 77)",
    borderWidth: 1,
    width: 250,
    textAlign: "right",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "rgb(253 230 138)",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgb(252 211 77)",
    borderWidth: 1,
  },
  addText: {
   fontSize: 24,
   fontWeight: 'bold',
   fontFamily: "Times New Roman",
   
  },
});

export default AddItem;
