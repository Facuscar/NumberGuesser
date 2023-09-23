import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer: React.FC<NumberContainerProps> = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.numberText}>
      {children}
    </Text>
  </View>
)

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.ACCENT_500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.ACCENT_500,
    fontSize: 36,
    fontWeight: 'bold'
  },
});
