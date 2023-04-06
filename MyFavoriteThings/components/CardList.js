import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
const CardList = ({items}) => {

    const renderCard = ({item}) => {
        return (
        <Card item={item}/>
        )
    }

    return (
        <FlatList
            data={items}
            renderItem={renderCard}
            keyExtractor={item => item._id}
        />
    )
}

export default CardList;