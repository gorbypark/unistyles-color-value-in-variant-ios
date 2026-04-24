import { useUnistyles } from "react-native-unistyles";

export const useSafeAreaInsets = () => {
  const { rt } = useUnistyles();

  return rt.insets;
};
