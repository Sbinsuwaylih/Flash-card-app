import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import Card from '../hooks/card';

// Regular expression for identifying special characters in API fetches
let expression = /&quot;|&#039;|&Uuml;|&iacute;|&amp;/g;

const FetchQuestion = ({category}) => {
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const onRefresh = () => {
        setRefreshing(true);
        getQuestion();
        setTimeout(() => {
            setRefreshing(false);
        }, 1400);
    };

    const getQuestion = async () => {
        try {
            let url = `https://opentdb.com/api.php?amount=10&category=${category}`;
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getQuestion();
    }, []);

    const questionType = (item) => {
        let answers = [];
        answers.push(item.correct_answer);
        answers.push(...item.incorrect_answers);

        // Shuffle the placement of the answers array
        answers.sort(() => Math.random() - 0.5);

        // Return the choices as an array
        return answers.map(answer => answer.replace(expression, ''));
    };

    return (
        <View >
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    data={data}
                    keyExtractor={({ question }) => question}
                    renderItem={({ item }) => (
                        <Card
                            question={item.question.replace(expression, '')}
                            answer={item.correct_answer}
                            choices={questionType(item)}
                            routeName = "Home"
                        />
                    )}
                />
            )}
        </View>
    );
}

export default FetchQuestion;
