import React from 'react';
import FetchQuestion from '../hooks/fetching';
import { Text, View, StyleSheet, SafeAreaView, FlatList, Button } from 'react-native';
import { useRoute } from "@react-navigation/native";
import styles from '../styles/homeScreen';

// Removed import for 'Card' since it's not being used.

const HomeScreen = () => {
    const route = useRoute()
    
    let category = route.params?.category
    return (
        <View style={styles.container}>
           
            <Text style={styles.titleText}>Home Screen</Text>
            <FetchQuestion category={category}/>
        </View>
    );
}




export default HomeScreen;


