import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const ListItem = ({name, image}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Image source={image} style={styles.img} />
        </View>
    );
};

const styles = StyleSheet.create({
    nameText: {
        fontSize: 20, 
        color: 'blue',
        marginTop: 10
    },
    img: {
        width: 250, 
        height: 250
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        padding: 5,
        marginVertical: 5,
    }
});

export default ListItem;