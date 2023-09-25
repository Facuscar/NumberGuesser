import { StyleSheet, Text } from "react-native";

import { Colors } from "../../constants/colors";

interface InstructionTextProps {
  children: React.ReactNode;
};

const InstructionText: React.FC<InstructionTextProps> = ({ children }) => (
  <Text style={styles.instructionText}>{children}</Text>
)

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.ACCENT_500,
    fontSize: 24,
  }
});
