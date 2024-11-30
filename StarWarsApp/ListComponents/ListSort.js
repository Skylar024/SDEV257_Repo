import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

const arrows = new Map([
    // Temporarily Hidden
    // [true, "▼"],
    // [false, "▲"],
]);

export default function ListSort({ onSort, asc }) {
    // Temporarily Hidden
    // return <Text onPress={onSort}>{arrows.get(asc)}</Text>;
}
ListSort.propTypes = {
    onSort: PropTypes.func.isRequired,
    asc: PropTypes.bool.isRequired,
};