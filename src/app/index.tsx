import { StyleSheet } from "react-native-unistyles";

import { Button } from "@/components/button";
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
      <Text>Is dark mode? {isDark ? "true" : "false"}</Text>
      <Text>Current theme name: {themeName}</Text>
      <Text>Current breakpoint: {breakpoint}</Text>
      <Text>Current height: {height}</Text>
      <Text>Current width: {width}</Text>
      <Button>Primary lg</Button>
      <Button variant="secondary">Secondary lg</Button>
      <Button variant="destructive">Destructive lg</Button>
      <Button variant="ghost">Ghost lg</Button>
      <Button size="sm">Primary sm</Button>
      <Button variant="secondary" size="sm">
        Secondary sm
      </Button>
      <Button variant="destructive" size="sm">
        Destructive sm
      </Button>
      <Button variant="ghost" size="sm">
        Ghost sm
      </Button>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: theme.gap.xxl,
    gap: theme.gap.sm,
  },
}));
