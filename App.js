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

  const addGoalHandler = (goalToBeAdded) => {
    if (goalToBeAdded === '') return;

    setGoals(prevState => [
      ...prevState,
      {
        text: goalToBeAdded,
        id: `_${Math.random().toString() * Math.random().toString()}_&+&_${goalToBeAdded}_`
      }
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <GoalInput
          onPress={addGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text} />
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
    paddingHorizontal: 60,
  },
  goalsContainer: {
    flex: 8,
  },
});
