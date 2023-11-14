import * as React from 'react';
import { Text, View, FlatList,RefreshControl } from 'react-native';
import { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../../config/firebase"
import Card from '../hooks/card';
import styles from '../styles/noteScreen';
export default function DetailsScreen() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        
        setRefreshing(true);
      
        setTimeout(() => {
            setRefreshing(false);
        }, 1400);
    };

    useEffect(() => {
    
        setLoading(true);
        const questionsRef = collection(db, "questions");
        onSnapshot(questionsRef, (snapshot) => {
            let questionsList = [];
            snapshot.docs.map((doc) => questionsList.push({ ...doc.data(), id: doc.id }));
            setQuestions(questionsList);
            setLoading(false);
           

        });
    }, []);

    const renderItem = ({ item }) => (
        <Card
        question={item.question}
        choices={item.choices}
        answer={item.correctAnswer}
        id={item.id} 
        routeName='Quiz'
      />
    );
    
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Questions</Text>
            <FlatList  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                data={questions}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{ width: '100%' }} 
            />

        </View>
    );
}