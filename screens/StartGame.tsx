import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface StartGameProps {
  onPickNumber: (v: number) => void;
}

const StartGame: React.FC<StartGameProps> = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const resetInputHandler = () => {
    setEnteredNumber("");
  }

  const numberInputHandler = (value: string) => {
    setEnteredNumber(value);
  };
  
  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert
        .alert(
          'Invalid number',
          'Number has to be a number between 1 and 99',
          [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        )
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>
            Reset
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmButtonHandler}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
