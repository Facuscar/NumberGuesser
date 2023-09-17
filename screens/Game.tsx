import { View, StyleSheet, SafeAreaView } from 'react-native';

import Title from '../components/Title';

const Game: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <Title>
        Opponent's guess
      </Title>
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
