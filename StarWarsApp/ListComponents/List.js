import React from "react";
import PropTypes from "prop-types";
import { Text, FlatList } from "react-native";
import styles from "../styles";
import ListControls from "./ListControls";
import ScrollAndSwipe from "../ScrollAndSwipe.js";


export default function List({ Controls, data, onFilter, onSort, asc, onSwipe }) {
  

  
  return (
      <FlatList
        data={data}
        ListHeaderComponent={<Controls {...{ onFilter, onSort, asc }} />}
        renderItem={({ item }) => (
          <ScrollAndSwipe onSwipe={() => onSwipe(item)} name={item.value} />//onSwipe(item.value)} name={item.value} //navigation.navigate("details", {item: name })
          
        )}
      />
  );
}

List.propTypes = {
  Controls: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  asc: PropTypes.bool.isRequired,
  onSwipe: PropTypes.func.isRequired,
};

List.defaultProps = {
  Controls: ListControls,
};


