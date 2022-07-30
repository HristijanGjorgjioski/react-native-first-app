import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder='Your goals!' />
          <Button title="Add Goal" />
        </View>
        <View style={styles.goalsContainer}>
          <Text>List of Goals</Text>
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
