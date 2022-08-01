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

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalText, setGoalText] = useState('');

  const clearForm = () => {
    setGoalText('');
  };

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText)
  }

  const addGoalHandler = (goalToBeAdded) => {
    clearForm();
    if (goalToBeAdded === '') return;

    setGoals(prevState => [
      ...prevState,
      {
        text: goalToBeAdded,
        key: `_${Math.random.toString() * Math.random.toString()}_&+&_${goalToBeAdded}_`
      }
    ]);
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Your goals!'
            onChangeText={goalInputHandler}
            value={goalText}
          />
          <Button title="Add Goal" onPress={() => addGoalHandler(goalText)} />
        </View>
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <View style={styles.goalItem} key={itemData.item.key}>
                  <Text style={styles.goalText}>{itemData.item.text}</Text>
                </View>
              )
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
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 4,
  },
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#fff',
  }
});
