import { View, StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../constants/colors";

interface CardProps {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => (
  <View style={styles.card}>
    {children}
  </View>
)

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 35,
    marginHorizontal: 24,
    backgroundColor: Colors.PRIMARY_800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
