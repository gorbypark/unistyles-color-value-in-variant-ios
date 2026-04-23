import { StyleSheet } from "react-native-unistyles";

import { breakpoints } from "@/theme/breakpoints";
import { darkColors } from "@/theme/colors/darkColors";
import { lightColors } from "@/theme/colors/lightColors";
import { gaps } from "@/theme/gaps";

const lightTheme = {
  colors: lightColors,
  gap: gaps,
};

const darkTheme = { ...lightTheme, colors: darkColors };

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  settings: {
    adaptiveThemes: true,
    nativeBreakpointsMode: "points",
  },
  breakpoints,
});
