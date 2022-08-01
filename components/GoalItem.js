import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text, onPress, goalId }) => {
  return (
    <>
      <Pressable onPress={onPress.bind(this, goalId)}>
        <View style={styles.goalItem}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
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

export default GoalItem