import { Pressable, PressableProps, Text } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const styles = StyleSheet.create((theme) => ({
  button: {
    // alignSelf: {
    //   xs: "center",
    //   xl: "flex-start",
    // },
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radii.sm,
    variants: {
      variant: {
        primary: {
          backgroundColor: theme.colors.platform.systemFill, // The same color values in a variant do not work.
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
      disabled: {
        true: {
          backgroundColor: "red",
        },
      },
    },
  },
  label: {
    fontWeight: "600",
    variants: {
      variant: {
        primary: {
          color: theme.colors.platform.label,
        },
        secondary: {
          color: theme.colors.platform.secondaryLabel,
        },
        destructive: {
          color: theme.colors.platform.label,
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
      disabled: {
        true: {
          color: theme.colors.primary,
        },
      },
    },
  },
}));

type Variants = NonNullable<Parameters<typeof styles.useVariants>[0]>;
type ButtonVariant = NonNullable<Variants["variant"]>;
type ButtonSize = NonNullable<Variants["size"]>;

interface ButtonProps extends Omit<PressableProps, "style" | "disabled"> {
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  children: string;
}

export const Button = ({
  variant = "primary",
  disabled = false,
  size = "lg",
  children,
  ...rest
}: ButtonProps) => {
  styles.useVariants({
    variant,
    size,
    disabled: disabled ? "true" : undefined,
  });

  return (
    <Pressable style={styles.button} disabled={disabled} {...rest}>
      <Text style={styles.label} disabled={disabled}>
        {children}
      </Text>
    </Pressable>
  );
};
