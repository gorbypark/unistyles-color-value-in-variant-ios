import { Color } from "expo-router";
import { Platform } from "react-native";

const p = <T>(ios: T, android: T) =>
  Platform.select({ ios, android, default: ios });

export const platformColors = {
  // Labels / Text
  label: p(Color.ios.label, Color.android.dynamic.onSurface),
  secondaryLabel: p(
    Color.ios.secondaryLabel,
    Color.android.dynamic.onSurfaceVariant,
  ),
  tertiaryLabel: p(
    Color.ios.tertiaryLabel,
    Color.android.dynamic.onSurfaceVariant,
  ),
  quaternaryLabel: p(
    Color.ios.quaternaryLabel,
    Color.android.dynamic.onSurfaceVariant,
  ),
  placeholderText: p(
    Color.ios.placeholderText,
    Color.android.dynamic.onSurfaceVariant,
  ),
  darkText: p(Color.ios.darkText, Color.android.dynamic.onSurface),
  lightText: p(Color.ios.lightText, Color.android.dynamic.onSurfaceInverse),

  // Backgrounds
  systemBackground: p(
    Color.ios.systemBackground,
    Color.android.dynamic.surface,
  ),
  secondarySystemBackground: p(
    Color.ios.secondarySystemBackground,
    Color.android.dynamic.surfaceContainer,
  ),
  tertiarySystemBackground: p(
    Color.ios.tertiarySystemBackground,
    Color.android.dynamic.surfaceContainerHigh,
  ),

  // Grouped Backgrounds
  systemGroupedBackground: p(
    Color.ios.systemGroupedBackground,
    Color.android.dynamic.background,
  ),
  secondarySystemGroupedBackground: p(
    Color.ios.secondarySystemGroupedBackground,
    Color.android.dynamic.surfaceContainerLow,
  ),
  tertiarySystemGroupedBackground: p(
    Color.ios.tertiarySystemGroupedBackground,
    Color.android.dynamic.surfaceContainerHigh,
  ),

  // Fills (tinted overlays on content)
  systemFill: p(
    Color.ios.systemFill,
    Color.android.dynamic.surfaceContainerHighest,
  ),
  secondarySystemFill: p(
    Color.ios.secondarySystemFill,
    Color.android.dynamic.surfaceContainerHigh,
  ),
  tertiarySystemFill: p(
    Color.ios.tertiarySystemFill,
    Color.android.dynamic.surfaceContainer,
  ),
  quaternarySystemFill: p(
    Color.ios.quaternarySystemFill,
    Color.android.dynamic.surfaceContainerLow,
  ),

  // Separators
  separator: p(Color.ios.separator, Color.android.dynamic.outlineVariant),
  opaqueSeparator: p(Color.ios.opaqueSeparator, Color.android.dynamic.outline),

  // Interactive
  link: p(Color.ios.link, Color.android.dynamic.primary),

  // System Colors
  systemBlue: p(Color.ios.systemBlue, Color.android.dynamic.primary),
  systemGreen: p(Color.ios.systemGreen, Color.android.dynamic.secondary),
  systemRed: p(Color.ios.systemRed, Color.android.dynamic.error),
  systemOrange: p(Color.ios.systemOrange, Color.android.dynamic.tertiary),
  systemYellow: p(
    Color.ios.systemYellow,
    Color.android.dynamic.tertiaryContainer,
  ),
  systemPink: p(Color.ios.systemPink, Color.android.dynamic.errorContainer),
  systemPurple: p(Color.ios.systemPurple, Color.android.dynamic.tertiary),
  systemIndigo: p(Color.ios.systemIndigo, Color.android.dynamic.tertiary),
  systemTeal: p(Color.ios.systemTeal, Color.android.dynamic.secondary),
  systemCyan: p(Color.ios.systemCyan, Color.android.dynamic.secondaryContainer),
  systemMint: p(Color.ios.systemMint, Color.android.dynamic.secondaryContainer),
  systemBrown: p(
    Color.ios.systemBrown,
    Color.android.dynamic.tertiaryContainer,
  ),

  // Grays (lightest to darkest on light mode)
  systemGray: p(Color.ios.systemGray, Color.android.dynamic.outline),
  systemGray2: p(Color.ios.systemGray2, Color.android.dynamic.outlineVariant),
  systemGray3: p(
    Color.ios.systemGray3,
    Color.android.dynamic.surfaceContainerHighest,
  ),
  systemGray4: p(
    Color.ios.systemGray4,
    Color.android.dynamic.surfaceContainerHigh,
  ),
  systemGray5: p(
    Color.ios.systemGray5,
    Color.android.dynamic.surfaceContainerLow,
  ),
  systemGray6: p(
    Color.ios.systemGray6,
    Color.android.dynamic.surfaceContainerLowest,
  ),
};
