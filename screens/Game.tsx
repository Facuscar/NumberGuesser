import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

const Game: React.FC = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>
        Opponent's guess
      </Text>
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
