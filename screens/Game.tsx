import { View, StyleSheet, Text, Alert } from 'react-native';

import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

const generateRandomNumber = (min: number, max: number, exclude: number): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
}

interface GameProps {
  userNumber: number;
  setGameIsOver: (v: boolean) => void;
};

let minBoundary = 1;
let maxBoundary = 100;

const Game: React.FC<GameProps> = ({ userNumber, setGameIsOver }) => {
  const [guess, setGuess] = useState<number>(generateRandomNumber(minBoundary, maxBoundary, userNumber));

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
  }

  useEffect(() => {
    if (userNumber === guess) setGameIsOver(true);
  }, [guess])

  return (
    <View style={styles.screenContainer}>
      <Title>
        Opponent's guess
      </Title>
      <NumberContainer>
        {userNumber}
      </NumberContainer>
      <View>
        <Text>
          Higher or lower?
        </Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
        </View>
        <Text>{guess}</Text>
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
});
