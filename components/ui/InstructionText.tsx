import { StyleSheet, Text, TextProps } from "react-native";

import { Colors } from "../../constants/colors";

interface InstructionTextProps extends TextProps {
  children: React.ReactNode;
};

const InstructionText: React.FC<InstructionTextProps> = ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
)

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.ACCENT_500,
    fontSize: 24,
  }
});
