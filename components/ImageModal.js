import React, { useState } from "react";
import { Modal, Button, View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";

{
  /* TODO: change the UI of the Modal */
}
{
  /* TODO: add take photo */
}
const ImageModal = ({ image, visible, onClose, onSelectImage }) => {
  const handleChooseFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      onSelectImage(result.assets[0].uri);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View>
              <TouchableOpacity style={styles.button} onPress={handleChooseFromGallery}>
                <Text style={styles.buttonText}>Choose from Gallery</Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: 'rgb(254 243 199)',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
  },

  button: {
    backgroundColor: 'rgb(253 230 138)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
});

export default ImageModal;
