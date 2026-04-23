import { StyleSheet } from "react-native-unistyles";

import { breakpoints } from "@/theme/breakpoints";
import { darkColors } from "@/theme/colors/dark-colors";
import { lightColors } from "@/theme/colors/light-colors";
import { gaps } from "@/theme/gaps";

import { radii } from "./radii";

const lightTheme = {
  colors: lightColors,
  gap: gaps,
  radii: radii,
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
