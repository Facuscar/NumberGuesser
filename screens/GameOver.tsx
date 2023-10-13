import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  userNumber: number;
  onStartNewGame: () => void;
  rounds: number;
}

const GameOver: React.FC<GameOverProps> = ({userNumber, rounds, onStartNewGame}) => (
  <View style={styles.rootContainer}>
    <Title>
      Game over!
    </Title>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
    <Text style={styles.summaryText}>
      Your phone took <Text style={styles.highLight}>{rounds}</Text> guesses to find the number <Text style={styles.highLight}>{userNumber}</Text>
    </Text>
    <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
  </View>
)

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.PRIMARY_800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    marginBottom: 24,
    textAlign: "center"
  },
  highLight: {
    fontFamily: 'open-sans-bold',
    color: Colors.PRIMARY_500,
  }
})