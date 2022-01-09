import React from 'react';
import { View, Text, Button } from 'react-native'; 

const ViewItemScreen = ({navigation, route}) => {
    const { id, title, content, date } = route.params;
    return (
        <View>
            <Text>ID: {id}</Text>
            <Text>DATE: {new Date(date).toLocaleDateString()}</Text>
            <Text>TITLE: {title}</Text>
            <Text>CONTENT: {content}</Text>
            <Button 
                title='Edit Item' onPress={(() => {
                    /* make helper function for screen names */
                    navigation.navigate('Edit', {id, id})
                })}  
            />
        </View>
    );
};

export default ViewItemScreen;