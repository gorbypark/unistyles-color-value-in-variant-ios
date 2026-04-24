import { Pressable, PressableProps, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  button: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.xs,
    borderColor: theme.colors.platform.systemRed, // ColorValue not in a variant works
    borderWidth: 1,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.platform.systemRed, // The same color values in a variant do not work.
        },
        secondary: {
          backgroundColor: theme.colors.platform.secondarySystemFill,
        },
        destructive: {
          backgroundColor: theme.colors.platform.systemRed,
        },
        ghost: {
          backgroundColor: "transparent",
        },
      },
      size: {
        sm: {
          paddingVertical: theme.gap.xs,
          paddingHorizontal: theme.gap.sm,
        },
        lg: {
          paddingVertical: theme.gap.sm,
          paddingHorizontal: theme.gap.md,
        },
      },
    },
  },
  label: {
    fontWeight: "600",
    variants: {
      variant: {
        primary: {
          color: theme.colors.platform.lightText,
        },
        secondary: {
          color: theme.colors.platform.label,
        },
        destructive: {
          color: theme.colors.platform.lightText,
        },
        ghost: {
          color: theme.colors.platform.systemBlue,
        },
      },
      size: {
        sm: {
          fontSize: 14,
        },
        lg: {
          fontSize: 16,
        },
      },
    },
  },
}));

type Variants = NonNullable<Parameters<typeof styles.useVariants>[0]>;
type ButtonVariant = NonNullable<Variants["variant"]>;
type ButtonSize = NonNullable<Variants["size"]>;

interface ButtonProps extends Omit<PressableProps, "style"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: string;
}

export const Button = ({
  variant = "primary",
  size = "lg",
  children,
  ...rest
}: ButtonProps) => {
  styles.useVariants({ variant, size });

  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
};
