import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [goalText, setGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText)
  }

  const addGoalHandler = () => {
    setGoals(prevState => [...prevState, goalText]);
    setGoalText('');
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
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
        <View style={styles.goalsContainer}>
          {goals.map((goal, i) => (
            <Text key={`_${i}_+_${goal}_`}>{goal}</Text>
          ))}
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
  }
});
