import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { fetchItems, fetchFilms } from "../api"; // General fetch for other endpoints
import List from "./List";
import styles from "../styles";
import Modal from "../Modal";
import { useNavigation } from "@react-navigation/native";

export default function ListContainer({ endpoint }) {
    const navigation = useNavigation();
    const [asc, setAsc] = useState(true);
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);
    const [swipeModalContent, setSwipeModalContent] = useState("");
    const [swipeModalVisible, setSwipeModalVisible] = useState(false);

    function toggleModal() {
        setSwipeModalVisible(!swipeModalVisible);
    }
    

    useEffect(() => {
        //Used for Films only because it uses 'title' attribute instead of 'name' attribute like the others do
        if (endpoint == "Films") {
            fetchFilms(filter, asc)
                .then((items) => {
                    const Data = items.map((item, i) => ({
                        key: i.toString(),
                        value: item.properties.title,
                    }));
                setData(Data);
            });
        } 
        //Used for other tabs because Films use 'title' attribute instead of 'name' attribute
        else {
            fetchItems(endpoint, filter, asc)
                .then((items) => {
                    const mappedData = items.map((item, i) => ({
                        key: i.toString(),
                        value: item.name,
                        details: item,
                    }));
                    setData(mappedData);
                    //console.log(mappedData);
                });
        }
    }, [endpoint, filter, asc]);


    const swipeHandler = (item) => {
        
        
        if (endpoint === "Planets") {
            navigation.navigate("details", {details: item.details});
            console.log(endpoint)
        }


        // setSwipeModalContent(text);
        // setSwipeModalVisible(true);
    }


    return ( 
        <View style={styles.container}>
            <List
                data={data}
                asc={asc}
                onFilter={(text) => setFilter(text)}
                onSort={() => setAsc(!asc)}
                onSwipe={swipeHandler}
            />
            
        </View>
    );
}