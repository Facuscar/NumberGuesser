import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';
import Game from './screens/Game';
import { Colors } from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState<number>();

  const pickNumberHandler = (pickedNumber: number) => {
    setUserNumber(pickedNumber)
  }

  const img = require('./assets/images/background.png');

  return (
    <LinearGradient style={styles.rootScreen}  colors={[Colors.PRIMARY_700, Colors.ACCENT_500]}>
      <ImageBackground source={img} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {!userNumber && <StartGame onPickNumber={pickNumberHandler} />}
          {userNumber && <Game />}
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
