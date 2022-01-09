import React, { useReducer, useEffect } from 'react';
import { actionTypes } from '../helpers/actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const STORAGE_KEY = 'my_super_secret_key';

const ItemContext = React.createContext();

let initialDiaryState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.create: 
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: action.payload.title,
                    content: action.payload.content,
                    date: new Date()
                }
            ]

        case actionTypes.update:
            return state.map((e) => {
                if (e.id === action.payload.id) {
                    return action.payload;
                } else {
                    return e;
                }
            });

        case actionTypes.delete:
            return state.filter((e) => e.id!== action.payload.id);

        case actionTypes.save:
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (error) {
                console.log(error);
            } finally {
                return state;
            }
        
        case actionTypes.load:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    content: action.payload.content,
                    date: new Date(action.payload.date),
                }
            ];

        default: 
            return state;
    }
}

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialDiaryState);

    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                initialDiaryState = JSON.parse(storage);
                initialDiaryState.forEach((item) => {
                    dispatch({type: actionTypes.load, payload: item});
                })
            }
        }
        loadStorage();
    }, [STORAGE_KEY]);
    
    const addItem = (title, content, startPage, endPage, childComment, parentComment, callback) => {
        dispatch({type: actionTypes.create, payload: { title, content, startPage, endPage, childComment, parentComment }});
        dispatch({type: actionTypes.save});
        if (callback) {
            callback();
        }
    };

    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id :id}});
        dispatch({type: actionTypes.save});
        if (callback) {
            callback();
        }
    };

    const updateItem = (id, title, content, date, callback) => {
        dispatch({type: actionTypes.update, payload: {id, title, content, date}})
        dispatch({type: actionTypes.save});
        if (callback) {
            callback();
        }
    };

    return(
        <ItemContext.Provider value={{
            state: state,
            create: addItem,
            remove: deleteItem,
            update: updateItem,
        }}>
            {children}
        </ItemContext.Provider>
    )
};

export default ItemContext;