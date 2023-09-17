import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';
import Game from './screens/Game';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
  }

  const img = require('./assets/images/background.png');

  return (
    <LinearGradient style={styles.rootScreen}  colors={['#4e0329', '#ddb52f']}>
      <ImageBackground source={img} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage} >
        {!userNumber && <StartGame onPickNumber={pickNumberHandler} />}
        {userNumber && <Game />}
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
