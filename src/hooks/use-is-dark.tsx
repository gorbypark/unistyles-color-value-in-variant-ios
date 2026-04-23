import { useColorScheme } from "@/hooks/use-color-scheme";

export const useIsDark = () => {
  return useColorScheme() === "dark";
};
