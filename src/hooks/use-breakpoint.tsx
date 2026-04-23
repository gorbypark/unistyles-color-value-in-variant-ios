import { useUnistyles } from "react-native-unistyles";

export const useBreakpoint = () => {
  const { rt } = useUnistyles();

  return rt.breakpoint;
};
