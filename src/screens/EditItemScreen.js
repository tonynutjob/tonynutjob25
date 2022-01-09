import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import ItemContext from '../contexts/ItemContext';

const EditItemScreen = ({navigation, route}) => {

    const {id} = route.params;
    const {state, update} = useContext(ItemContext);
    const currentItem = state.find((e) => e.id === id);
    const [title, setTitle] = useState(currentItem.title);
    const [content, setContent] = useState(currentItem.content);

    return (
        <View>
            <Text style={styles.textLabel}>Enter your title: </Text>
            <TextInput
                style={styles.textInput} 
                placeholder='Type here'
                onChangeText={(text) => {
                    setTitle(text);
                }}
            />
            <Text style={styles.textLabel}>Enter your content: </Text>
            <TextInput
                style={styles.textInput} 
                placeholder='Type here'
                onChangeText={(text) => {
                    setContent(text);
                }}
            />
            <Button 
                title='Submit Item'
                onPress={() => {
                    update(
                        currentItem.id,
                        title, 
                        content,
                        currentItem.date, 
                        () => navigation.pop());
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
    },
});

export default EditItemScreen;