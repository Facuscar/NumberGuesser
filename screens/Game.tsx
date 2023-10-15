import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

const generateRandomNumber = (min: number, max: number, exclude: number): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
}

interface GameProps {
  userNumber: number;
  gameOverHandler: (v: number) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const Game: React.FC<GameProps> = ({ userNumber, gameOverHandler }) => {
  const initialGuess = generateRandomNumber(minBoundary, maxBoundary, userNumber);
  const [guess, setGuess] = useState<number>(initialGuess);
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess])

  const nextGuessHandler = (direction: 'greater' | 'lower') => {
    if (direction === 'lower' && guess < userNumber || direction === 'greater' && guess > userNumber) {
      Alert.alert("Don't lie!", 'You know that this is wrong', [{ text: 'Sorry!', style: 'cancel' }])
      return;
    }
    if (direction === 'lower') {
      maxBoundary = guess;
    } else {
      minBoundary = guess + 1;
    }
    const newGuess = generateRandomNumber(minBoundary, maxBoundary, guess);
    setGuess(newGuess);
    setGuessRounds(prev => [newGuess, ...prev]);
  }

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  const guessRoundsListLength = guessRounds.length;

  useEffect(() => {
    if (userNumber === guess) gameOverHandler(guessRoundsListLength);
  }, [guess])


  return (
    <View style={styles.screenContainer}>
      <Title>
        Opponent's guess
      </Title>
      <NumberContainer>
        {userNumber}
      </NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
          </View>
        </View>
        <Text>{guess}</Text>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem roundNumber={itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => String(item)}
        />
      </View>
    </View>
  )
}

export default Game;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});
