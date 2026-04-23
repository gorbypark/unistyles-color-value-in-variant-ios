import { Text as RNText, TextProps as RNTextProps } from "react-native";

import { useIsDark } from "@/hooks/use-is-dark";

interface TextProps extends RNTextProps {
  style?: RNTextProps["style"];
}

export const Text = ({ style, ...rest }: TextProps) => {
  const isDark = useIsDark();

  return (
    <RNText style={[{ color: isDark ? "white" : "black" }, style]} {...rest} />
  );
};
