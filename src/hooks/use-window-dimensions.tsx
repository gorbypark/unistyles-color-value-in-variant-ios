import { useUnistyles } from "react-native-unistyles";

export const useWindowDimensions = () => {
  const { rt } = useUnistyles();

  return rt.screen;
};
