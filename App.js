import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import AddItemScreen from './src/screens/AddItemScreen';
import ListViewScreen from './src/screens/ListViewScreen';
import ViewItemScreen from './src/screens/ViewItemScreen';
import { ItemProvider } from './src/contexts/ItemContext';
import EditItemScreen from './src/screens/EditItemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <ItemProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='List'>
                    <Stack.Screen 
                        name='Add'
                        component={AddItemScreen}
                        options={{ title: 'Add a new item'}}
                    />
                    <Stack.Screen 
                        name='Edit'
                        component={EditItemScreen}
                        options={{ title: 'Edit an item'}}
                    />
                    <Stack.Screen 
                        name='List'
                        component={ListViewScreen}
                        options={{ title: 'View all items'}}
                    />
                    <Stack.Screen 
                        name='View'
                        component={ViewItemScreen}
                        options={{title: 'View item'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ItemProvider>
    );
}

const styles = StyleSheet.create({});

export default App;