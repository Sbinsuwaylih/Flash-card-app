import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/card';
import { FontAwesome } from '@expo/vector-icons';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";
import FlipCard from 'react-native-flip-card'

const Card = ({ question, answer, choices, questionType, id, routeName }) => {
  const [showTrash, setShowTrash] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = async () => {

    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              // Delete the item from the database
              await deleteDoc(doc(db, 'questions', id));

              // Set the isDeleted state to true to remove the item from the UI
              setIsDeleted(true);
            } catch (error) {
              console.error('Error deleting item:', error);
            }
          },
        },
      ]
    );
  };

  return isDeleted ? null : ( // Return null if the item is deleted
    <FlipCard
      style={styles.cardContainer}
      friction={10}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >

      <View>
        <View style={styles.textView}>
          <Text style={styles.cardText}>
            {question}
          </Text>
        </View>

        <View >
          <Text style={styles.Text}>{questionType}</Text>
        </View>
        {choices && (
          <View style={styles.choiceContainer}>
            <Text style={styles.choiceText}>Choices:{'\n'}</Text>

            {choices.map((choice, index) => (
              <Text key={index} style={styles.choiceText}>
                {`${index + 1}. ${choice}`}
              </Text>
            ))}
          </View>
        )}



        <TouchableOpacity
          onPress={() => {
            if (routeName === 'Home') {
              setShowTrash(true);

            } else {
              setShowTrash(true);
              handleDelete();

            }
          }}
          style={styles.favoriteButton}
        >
          {routeName === 'Quiz' ? (
            <FontAwesome name="trash" size={30} color="red" />
          ) : null}
        </TouchableOpacity>
      </View>

      <View style={styles.box}><Text style={styles.showAnswerButtonText}>{answer}</Text></View>


    </FlipCard>
  );
};

export default Card;


