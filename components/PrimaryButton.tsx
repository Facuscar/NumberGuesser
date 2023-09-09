import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton: React.FC<{ children: string }> = ({ children }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container}
      >
        <Text style={styles.buttonText}>
          {children}
        </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
})