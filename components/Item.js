import React, { useState, useEffect  } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageModal from "./ImageModal";

const Item = ({ text, item, setItem, items, setItems }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [isMarked, setIsMarked] = useState(false);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  
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

  const handleMarkItem = () => {
    setIsMarked(true);

    setTimeout(() => {
      // TODO: make it disappear slowly
      const updatedItems = items.filter((itm) => itm !== item);
      setItems(updatedItems);
    }, 250);
  };

  const handleDisplayImage = () => {
    setModalVisible(true);
  };

  
  const handleImageSelect = (selectedImage) => {
    setImage(selectedImage);
    setModalVisible(true);
  };
  
 
  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.editBtn} onPress={handleEditPress}>
        <Icon name="pencil" size={22} color="rgba(0, 0, 0, 0.5)" />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TouchableOpacity onPress={handleSavePress}>
            <Icon name="check" size={25} color="#D2691E" />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={editedText}
            onChangeText={handleInputChange}
          />
        </>
      ) : (
        <TouchableOpacity onPress={handleDisplayImage}>
          <Text style={styles.itemText}>{editedText}</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleMarkItem}>
        <View style={[styles.square, isMarked && styles.marked]}>
          {isMarked && <Icon name="check" size={15} color="#000" />}
        </View>
      </TouchableOpacity>

      {/* TODO: change the UI of the Modal */}
      <ImageModal
        visible={modalVisible}
        image={image}
        onClose={() => setModalVisible(false)}
        onSelectImage={handleImageSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 15,
    backgroundColor: "rgb(224 242 254)",
    // borderBottomWidth: 2,
    // borderBottomColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgb(224 242 254)",
    opacity: 0.4,
    borderRadius: 4,
    borderColor: "rgb(14 116 144)",
    borderWidth: 3,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "bold",
    
  },
  editBtn: {
    marginRight: 10,
  },
  input: {
    fontSize: 20,
    flex: 1,
    textAlign: "center",
    color: "#D2691E",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Item;
