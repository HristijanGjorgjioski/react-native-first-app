import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import GoalInput from './components/GoalInput';

import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGoalHandler = (goalToBeAdded) => {
    if (goalToBeAdded === '') return;

    setGoals(prevState => [
      ...prevState,
      {
        text: goalToBeAdded,
        id: `_${Math.random().toString() * Math.random().toString()}_&+&_${goalToBeAdded}_`
      }
    ]);
    setIsModalOpen(false);
  }

  const deleteGoalHandler = (goalToBeRemovedId) => {
    setGoals(prevState => {
      return prevState.filter(goal => goal.id !== goalToBeRemovedId);
    })
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container}>
        <Button
          title='Add New Goal'
          color='#a065ec'
          onPress={() => setIsModalOpen(true)}
        />
        {isModalOpen && (
          <GoalInput
            onPress={addGoalHandler}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  goalId={itemData.item.id}
                  onPress={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,    
  },
  goalsContainer: {
    flex: 5,
  },
});
