import React from "react";
import PropTypes from "prop-types";
import { View, TextInput } from "react-native";
import styles from "../styles";

export default function ListFilter({ onFilter }) {
    return (
        <View>
            {/* Disabled this search bar temporarily */}
            <TextInput
                //autoFocus //Enable to automatically bring up keyboard for search bar when loading into a tab
                placeholder="Search: "
                style={styles.filterText}
                onChangeText={onFilter}
            />
        </View>
    );
}
ListFilter.propTypes ={
    onFilter: PropTypes.func.isRequired,
};