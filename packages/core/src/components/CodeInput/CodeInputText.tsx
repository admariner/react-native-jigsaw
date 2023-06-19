import React from "react";
import { Text, TextProps } from "react-native";
import type { Theme } from "../../styles/DefaultTheme";
import { withTheme } from "../../theming";
import { Cursor } from "react-native-confirmation-code-field";

interface CodeInputTextProps extends TextProps {
  cursorBlinkDuration?: number;
  cursorText?: string;
  isFocused?: boolean;
  theme: Theme;
}

/**
 * Text component that can conditionally render a blinking cursor when focused and empty
 * Meant to be used within a CodeInputCell component
 */
const CodeInputText: React.FC<CodeInputTextProps> = ({
  isFocused,
  cursorBlinkDuration,
  cursorText,
  style,
  theme,
  children,
  ...rest
}) => {
  return (
    <Text style={[{ color: theme.colors.strong }, style]} {...rest}>
      {children ||
        (isFocused ? (
          <Cursor cursorSymbol={cursorText} delay={cursorBlinkDuration} />
        ) : null)}
    </Text>
  );
};

export default withTheme(CodeInputText);
