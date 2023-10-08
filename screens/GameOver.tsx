import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { Colors } from "../constants/colors";

const GameOver: React.FC = () => (
  <View style={styles.rootContainer}>
    <Title>
      Game over!
    </Title>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
    </View>
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
  }
})