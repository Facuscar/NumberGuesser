import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/colors';

interface TitleProps {
  children: string;
}

const Title: React.FC<TitleProps> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
)

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
  },
})