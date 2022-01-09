import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import ListItem from '../components/ListItem';
import NavigationButton from '../components/NavigationButton';

const IndexScreen = ({navigation}) => {
    return (
        <View style={styles.container}>    
            
            <NavigationButton screenName='ScreenOne' navigation={navigation} />
            <NavigationButton screenName='ScreenTwo' navigation={navigation} />
            
            <Text style={styles.heading}>Flintstones and Rubbles</Text>
            
            <ScrollView vertical={true}>
                <ListItem name='Fred' image={require('../../assets/fred.jpg')}/>
                <ListItem name='Wilma' image={require('../../assets/wilma.png')}/>
                <ListItem name='Pebbles' image={require('../../assets/pebbles.png')}/>
                <ListItem name='Barney' image={require('../../assets/barney.jpg')}/>
                <ListItem name='Bettie' image={require('../../assets/bettie.png')}/>
                <ListItem name='Bamm-Bamm' image={require('../../assets/bamm.jpg')}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'green'
    },
});

export default IndexScreen;