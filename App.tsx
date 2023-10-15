import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGame from './screens/StartGame';
import Game from './screens/Game';
import GameOver from './screens/GameOver';

import { Colors } from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();
  const [gameIsOver, setGameIsOver] = useState<boolean>(false);
  const [guessRounds, setGuessRounds] = useState<number>(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber);
  }

  const startNewGameHandler = () => {
    setUserNumber(undefined);
    setGameIsOver(false);
    setGuessRounds(0)
  }

  const endGameHandler = (numberOfRounds: number) => {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  }

  const img = require('./assets/images/background.png');

  if (!fontsLoaded) return <AppLoading />;

  return (
    <LinearGradient style={styles.rootScreen}  colors={[Colors.PRIMARY_700, Colors.ACCENT_500]}>
      <ImageBackground source={img} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {!userNumber && <StartGame onPickNumber={pickNumberHandler} />}
          {userNumber && !gameIsOver && <Game userNumber={userNumber} gameOverHandler={endGameHandler} />}
          {userNumber && gameIsOver && <GameOver userNumber={userNumber} onStartNewGame={startNewGameHandler} rounds={guessRounds} />}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
