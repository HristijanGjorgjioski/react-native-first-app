import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = ({ onPress, isModalOpen, setIsModalOpen }) => {
  const [goalText, setGoalText] = useState('');

  const clearForm = () => {
    setGoalText('');
  };

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText)
  };

  const addGoalHandler = () => {
    onPress(goalText);
    clearForm();
  };

  return (
    <Modal animationType='slide' visible={isModalOpen}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your goals!'
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={() => setIsModalOpen(false)} color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color='#b180f0' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#311b6b',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 12,
    width: '100%',
    padding: 16,
    color: '#120438'
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 110,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default GoalInput;