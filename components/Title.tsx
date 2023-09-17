import { StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/colors';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
)

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.ACCENT_500,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.ACCENT_500,
    padding: 12,
  },
})