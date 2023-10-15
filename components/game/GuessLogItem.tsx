import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

interface GuessLogItemProps {
  roundNumber: number;
  guess: number;
}

const GuessLogItem: React.FC<GuessLogItemProps> = ({ roundNumber, guess }) => {
  
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>
        #{roundNumber + 1}
      </Text>
      <Text style={styles.itemText}>
        Opponent's guess: {guess}
      </Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.PRIMARY_800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.ACCENT_500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: 'open-sans',
  },
});