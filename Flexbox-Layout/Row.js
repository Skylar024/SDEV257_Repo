import React from "react";
import { PropTypes } from "prop-types";
import { View } from "react-native";
import styles from "./styles";

export default function Box({ children }) {
    return (
        <View style={styles.row}>{children}</View>
    );
}
Box.propTypes = {
    children: PropTypes.node.isRequired,
};