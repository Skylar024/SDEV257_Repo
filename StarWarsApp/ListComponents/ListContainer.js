import React, { useState, useEffect } from "react";
import { fetchItems, fetchFilms } from "../api"; // General fetch for other endpoints
import List from "./List";

export default function ListContainer({ endpoint }) {
    const [asc, setAsc] = useState(true);
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);

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
                    }));
                    setData(mappedData);
                });
        }
    }, [endpoint, filter, asc]);

    return (
        <List
            data={data}
            asc={asc}
            onFilter={(text) => {
                setFilter(text);
                //Determine if trying to fetch Films or anything else
                if (endpoint == "Films") {
                    fetchFilms(text, asc)
                        .then((items) =>
                        setData(items.map((item, i) => ({
                            key: i.toString(),
                            value: item.title,
                        }))));
                } 
                else {
                    fetchItems(endpoint, text, asc)
                        .then((items) =>
                        setData(items.map((item, i) => ({
                            key: i.toString(),
                            value: item.name,
                        }))));
                }
            }}
            onSort={() => {
                setAsc(!asc);
                if (endpoint == "Films") {
                    fetchFilms(filter, !asc)
                        .then((items) =>
                        setData(
                            items.map((item, i) => ({
                            key: i.toString(),
                            value: item.title,
                        }))));
                } 
                else {
                    fetchItems(endpoint, filter, !asc)
                        .then((items) =>
                        setData(items.map((item, i) => ({
                            key: i.toString(),
                            value: item.name,
                        }))));
                }
            }}
        />
    );
}