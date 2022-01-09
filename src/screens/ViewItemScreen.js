import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'; 

const ViewItemScreen = ({navigation, route}) => {
    const { id, title, content, date, startPage, endPage, childComment, parentComment  } = route.params;

    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>DATE: {new Date(date).toLocaleDateString()}</Text>
            <Text>TITLE: {title}</Text>
            <Text>CONTENT: {content}</Text>
            <Text>START PAGE: {startPage}</Text>
            <Text>END PAGE: {endPage}</Text>
            <Text>CHILD COMMENT: {childComment}</Text>
            <Text>PARENT COMMENT: {parentComment}</Text>
            <Button 
                title='Edit Item' onPress={(() => {
                    navigation.navigate('Edit', {id, id})
                })}  
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },

});

export default ViewItemScreen;