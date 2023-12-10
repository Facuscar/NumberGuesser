import { View, Image, StyleSheet, Text, Dimensions, useWindowDimensions, ScrollView } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  userNumber: number;
  onStartNewGame: () => void;
  rounds: number;
}

const GameOver: React.FC<GameOverProps> = ({userNumber, rounds, onStartNewGame}) => {
  const { width, height } = useWindowDimensions();

  const getImageSize = () => {
    if (height < 400) return 80;
    if (width < 300) return 150;
    return 300;
  }

  const imageStyle = {
    width: getImageSize(),
    height: getImageSize(),
    borderRadius: getImageSize() / 2,

  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>
          Game over!
        </Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={styles.summaryText}>
          Your phone took <Text style={styles.highLight}>{rounds}</Text> guesses to find the number <Text style={styles.highLight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start a new game</PrimaryButton>
      </View>
    </ScrollView>
  )
};

export default GameOver;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
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