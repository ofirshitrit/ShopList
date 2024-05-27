import React, { useState } from "react";
import { Modal, Button, View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

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
      <View style={styles.modalContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View>
            <Button
              title="Choose from Gallery"
              onPress={handleChooseFromGallery}
            />
          </View>
        )}
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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

export default ImageModal;
