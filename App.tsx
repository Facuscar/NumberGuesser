import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGame from './screens/StartGame';

export default function App() {
  const img = require('./assets/images/background.png');
  return (
    <LinearGradient style={styles.rootScreen}  colors={['#4e0329', '#ddb52f']}>
      <ImageBackground source={img} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage} >
        <StartGame />
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
