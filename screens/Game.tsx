import { View, StyleSheet, SafeAreaView } from 'react-native';

import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

const generateRandomNumber = (min: number, max: number, exclude: number): number => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return randomNumber;
}

interface GameProps {
  userNumber: number;
};

const Game: React.FC<GameProps> = ({ userNumber }) => {
  const [guess, setGuess] = useState<number>(generateRandomNumber(1, 100, userNumber));
  return (
    <View style={styles.screenContainer}>
      <Title>
        Opponent's guess
      </Title>
      <NumberContainer>
        {userNumber}
      </NumberContainer>
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
