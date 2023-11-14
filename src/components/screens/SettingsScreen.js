import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/settingsScreen';


export default function SettingsScreen() {
    const [question, setQuestion] = useState("");
    const [choices, setChoices] = useState(["", "", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState("");
    const questionsRef = collection(db, "questions");

    const handleSaveQuestion = async () => {
        try {
            if (!question || choices.some(choice => !choice) || !correctAnswer) {
                alert("Please fill in all fields and select the correct answer.");
                return;
            }
            if (!choices.includes(correctAnswer)) {
                alert("The correct answer must be among the choices.");
                return;
            }

            const newQuestion = {
                question,
                choices,
                correctAnswer,
            };

            await addDoc(questionsRef, newQuestion);
            setQuestion("");
            setChoices(["", "", "", ""]);
            setCorrectAnswer("");
            alert("Question saved successfully!");


        } catch (error) {
            console.error("Error saving question: ", error);
            alert("Error saving the question. Please try again.");
        }

    };

    const navigation = useNavigation();

    const navigateToQuizScreen = () => {
        navigation.navigate('Quiz');
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView style={{ flex: 1 }}>

                <View style={styles.container}>
                    <Text style={styles.heading}>Create a Question</Text>


                    <TextInput
                        placeholder="Enter your question"
                        value={question}
                        onChangeText={text => setQuestion(text)}
                        style={styles.input}
                    />

                    {

                        choices.map((choice, index) => (

                            <TextInput
                                key={index}
                                placeholder={`Choice ${index + 1}`}
                                value={choice}
                                onChangeText={text => {
                                    const updatedChoices = [...choices];
                                    updatedChoices[index] = text;

                                    setChoices(updatedChoices);
                                }}
                                style={styles.input}
                            />
                        ))}

                    <Text style={styles.label}>Enter the correct answer:</Text>
                    <TextInput
                        placeholder="Correct Answer"
                        value={correctAnswer}
                        onChangeText={text => setCorrectAnswer(text)}
                        style={styles.input}
                    />

                    <LinearGradient colors={['#1F2032', '#1f2032']} style={styles.button}>
                        <TouchableOpacity onPress={handleSaveQuestion}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <LinearGradient colors={['#F9977B', '#F9977B']} style={styles.quizButton}>
                        <TouchableOpacity onPress={navigateToQuizScreen}>
                            <Text style={styles.quizButtonText}>Go to Quiz</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>

    );
}

