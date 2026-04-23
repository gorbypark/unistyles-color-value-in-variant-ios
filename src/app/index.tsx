import { StyleSheet } from "react-native-unistyles";

import { Text } from "@/components/text";
import { View } from "@/components/view";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { useIsDark } from "@/hooks/use-is-dark";
import { useThemeName } from "@/hooks/use-theme-name";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";

export default function Index() {
  const isDark = useIsDark();
  const themeName = useThemeName();
  const breakpoint = useBreakpoint();
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>Is dark mode? {isDark ? "true" : "false"}</Text>
      <Text>Current theme name: {themeName} </Text>
      <Text>Current breakpoint: {breakpoint}</Text>
      <Text>Current height: {height}</Text>
      <Text>Current width: {width}</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: theme.gap.xxl,
  },
}));
