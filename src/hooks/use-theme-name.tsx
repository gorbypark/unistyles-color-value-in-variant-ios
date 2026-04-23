import { useUnistyles } from "react-native-unistyles";

export const useThemeName = () => {
  const { rt } = useUnistyles();
  return rt.themeName;
};
