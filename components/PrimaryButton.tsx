import { View, Text } from "react-native";

const PrimaryButton: React.FC<{ children: string }> = ({ children }) => {
  return (
    <View>
      <Text>
        {children}
      </Text>
    </View>
  )
}

export default PrimaryButton;