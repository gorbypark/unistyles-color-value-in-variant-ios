import { Pressable, PressableProps, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  button: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.xs,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.primary,
        },
        secondary: {
          backgroundColor: theme.colors.secondary,
        },
        destructive: {
          backgroundColor: theme.colors.destructive,
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
          color: theme.colors.primaryForeground,
        },
        secondary: {
          color: theme.colors.secondaryForeground,
        },
        destructive: {
          color: theme.colors.destructiveForeground,
        },
        ghost: {
          color: theme.colors.primary,
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
