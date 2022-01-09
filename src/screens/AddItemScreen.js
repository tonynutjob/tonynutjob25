import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import ItemContext from '../contexts/ItemContext';

const AddItemScreen = ({navigation, route}) => {
    
    const {create} = useContext(ItemContext);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [startPage, setStartPage] = useState('');
    const [endPage, setEndPage] = useState('');
    const [childComment, setChildComment] = useState('');
    const [parentComment, setParentComment] = useState('');

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

            <Text style={styles.textLabel}>Pages read:</Text>
            <View style={styles.itemContainer}>
                <TextInput
                    style={styles.intInput}
                    placeholder='Start'
                    onChangeText={(text) => {
                        setStartPage(text);
                    }}
                />
                <Text> to </Text>
                <TextInput
                    style={styles.intInput}
                    placeholder='Finish'
                    onChangeText={(text) => {
                        setEndPage(text);
                    }}
                />
            </View>

            <Text style={styles.textLabel}>Child comments:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Type here'
                onChangeText={(text) => {
                    setChildComment(text);
                }}
            />

            <Text style={styles.textLabel}>Parent comments:</Text>
            <TextInput 
                style={styles.textInput}
                placeholder='Type here'
                onChangeText={(text) => {
                    setParentComment(text);
                }}
            />

            <Button 
                title='Submit Item'
                onPress={() => {
                    create(title, content, startPage, endPage, childComment, parentComment, () => navigation.pop());
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
    intInput: {
        fontSize: 18,
        width: 48,
        padding: 10,
        margin: 5,
        borderWidth: 1,
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

});

export default AddItemScreen;