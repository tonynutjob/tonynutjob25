import React, { useContext, useEffect, useReducer } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { actionTypes } from '../helpers/actionTypes';
import ItemContext from '../contexts/ItemContext';

const ListViewScreen = ({ navigation }) => {
    const {state, remove} = useContext(ItemContext);
    
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Add')}>
                    <MaterialIcons name='add' size={32} color='black' />
                </Pressable>
            )
        })
    }, [state]);

    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={ (e) => e.id.toString()}
                renderItem={ ({item}) => {
                    return(
                        <Pressable onPress={() => navigation.navigate('View', {
                            id: item.id,
                            title: item.title,
                            content: item.content,
                            date: item.date.toUTCString()
                        })}>
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.date.toLocaleDateString()}
                                    </Text>
                                    <Text>
                                        {item.date.toLocaleTimeString()}
                                    </Text>
                                </View>
                                <Text style={styles.titleText}>{item.title}</Text>
                                <Pressable onPress={() => {
                                    remove(item.id);
                                }}>
                                    <MaterialIcons name='delete' size={32} color='black' />
                                </Pressable>
                            </View>
                        </Pressable>
                        );
                    }}
            />
        </View>
    )
}

                
const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateContainer: { 
        flexDirection: 'column',
        alignItems: 'center'
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 16,
        paddingLeft: 15,
        flex: 1,
        alignSelf: 'flex-start'
    }
});

export default ListViewScreen;