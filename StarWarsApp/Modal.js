import React from "react";
import { View, Text} from "react-native";
import styles from "./styles";

const Modal = ({ visible, content, onPressConfirm, onPressCancel }) => {
    if(!visible) return null;


    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalInner}>
            <Text style={styles.modalText}>{content}</Text>
            <Text style={styles.modalButton} onPress={onPressConfirm}>
                Yes
            </Text>
            <Text style={styles.modalButton} onPress={onPressCancel}>
                No
            </Text>
            </View>
        </View>
        
    );
}

export default Modal;


