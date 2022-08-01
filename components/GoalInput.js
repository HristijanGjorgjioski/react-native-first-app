import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ onPress }) => {
  const [goalText, setGoalText] = useState('');

  const clearForm = () => {
    setGoalText('');
  };

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText)
  }

  const addGoalHandler = () => {
    onPress(goalText);
    clearForm();
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your goals!'
        onChangeText={goalInputHandler}
        value={goalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
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
});

export default GoalInput