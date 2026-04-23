import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface TextProps extends RNTextProps {
  style?: RNTextProps["style"];
}

export const Text = ({ style, ...rest }: TextProps) => {
  return <RNText style={styles.text} {...rest} />;
};

const styles = StyleSheet.create((theme) => ({
  text: {
    color: theme.colors.primary,
  },
}));
