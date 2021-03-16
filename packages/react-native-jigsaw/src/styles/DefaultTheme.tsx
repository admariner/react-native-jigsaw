import { systemWeights } from "react-native-typography";

export default {
  disabledOpacity: 0.5,
  spacing: {
    gutters: 16,
    text: 4,
    small: 8,
    medium: 12,
    large: 16,
  },
  borderRadius: 8,
  borderRadius: {
    global: 6,
    button: 24,
  },
  colors: {
    primary: "rgba(90, 69, 255, 1)",
    secondary: "rgba(59, 201, 234, 1)",
    surface: "rgba(255, 255, 255, 1)",
    background: "rgba(251, 252, 253, 1)",
    error: "rgba(255, 69, 100, 1)",
    divider: "rgba(234, 237, 242, 1)",
    strong: "rgba(18, 20, 44, 1)",
    medium: "rgba(70, 78, 88, 1)",
    strongInverse: "rgba(255, 255, 255, 1)",
    mediumInverse: "rgba(255, 255, 255, 0.87)",
    lightInverse: "rgba(255, 255, 255, 0.68)",
    light: "rgba(165, 173, 183, 1)",
  },
  elevation: {
    "0": {
      shadowColor: "rgba(18, 20, 44, 1)",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 0,
      shadowOpacity: 0,
      borderWidth: 0,
      borderColor: "rgba(18, 20, 44, 1)",
      borderOpacity: 0,
    },
    "1": {
      shadowColor: "rgba(18, 20, 44, 1)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      shadowOpacity: 0.0599999987,
      borderWidth: 1,
      borderColor: "rgba(18, 20, 44, 1)",
      borderOpacity: 0.0599999987,
    },
    "2": {
      shadowColor: "rgba(18, 20, 44, 1)",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      shadowOpacity: 0.0799999982,
      borderWidth: 0,
      borderColor: "rgba(18, 20, 44, 1)",
      borderOpacity: 0,
    },
    "3": {
      shadowColor: "rgba(18, 20, 44, 1)",
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowRadius: 6,
      shadowOpacity: 0.119999997,
      borderWidth: 0,
      borderColor: "rgba(18, 20, 44, 1)",
      borderOpacity: 0,
    },
  },
  typography: {
    headline1: {
      ...systemWeights.regular,
      fontSize: 60,
      letterSpacing: 0,
      lineHeight: 71,
    },
    headline2: {
      ...systemWeights.regular,
      fontSize: 48,
      letterSpacing: 0,
      lineHeight: 58,
    },
    headline3: {
      ...systemWeights.regular,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 40,
    },
    headline4: {
      ...systemWeights.regular,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline5: {
      ...systemWeights.regular,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    body1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 26,
    },
    body2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    button: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 16,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 16,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 16,
    },
    headline6: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
  },
};
