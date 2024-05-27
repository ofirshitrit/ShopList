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
import * as ImagePicker from "expo-image-picker";

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

  const handleChooseFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      // Update the image state here
      setImage(result.assets[0].uri); 
    }
  };
  
  

  // const handleTakePhoto = async () => {
  //   const result = await ImagePicker.launchCameraAsync({
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  return (
    <View style={styles.item}>
      <TouchableOpacity style={styles.editBtn} onPress={handleEditPress}>
        <Icon name="pencil" size={25} color="#000" />
      </TouchableOpacity>
      {isEditing ? (
        <>
          <TouchableOpacity onPress={handleSavePress}>
            <Icon name="check" size={25} color="#000" />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View>
              <Button
                title="Choose from Gallery"
                onPress={handleChooseFromGallery}
              />
                {/* TODO: add take photo fuctionality */}
               {/* <Button title="Take Photo" onPress={handleTakePhoto} /> */}
            </View>
          )}
          <Button
            title="Close"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
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
