import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = ({ text, onPress, goalId }) => {
  return (
    <>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: '#210644' }}
          style={({ pressed }) => pressed && styles.pressedItem}
          onPress={onPress.bind(this, goalId)}
        >
          <Text style={styles.goalText}>{text}</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: '#fff',
    padding: 8,
  }
});

export default GoalItem;