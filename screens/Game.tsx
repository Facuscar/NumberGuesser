import { Text, View, StyleSheet } from 'react-native';

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
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
