import { Platform, StyleSheet, Text } from 'react-native';

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
    borderWidth: Platform.OS === "android" ? 2 : 0,
    borderColor: 'white',
    padding: 12,
    maxWidth: '80%',
  },
})