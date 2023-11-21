import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.ACCENT_500,
    borderRadius: 8,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.ACCENT_500,
    fontSize: 36,
  },
});
