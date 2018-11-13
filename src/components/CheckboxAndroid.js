/* @flow */

import * as React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import color from 'color';
import Icon from './CheckboxIcon';
import Touchable from "./Touchable";
import { withTheme } from '../core/theming';
import type { Theme, $RemoveChildren } from '../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {|
  /**
   * Status of checkbox.
   */
  status: 'checked' | 'unchecked' | 'indeterminate',
  /**
   * Whether checkbox is disabled.
   */
  disabled?: boolean,
  /**
   * Function to execute on press.
   */
  onPress?: () => mixed,
  /**
   * Custom color for unchecked checkbox.
   */
  uncheckedColor?: string,
  /**
   * Custom color for checkbox.
   */
  color?: string,
  /**
   * @optional
   */
  theme: Theme,
|};

type State = {
  scaleAnim: Animated.Value,
};

class CheckboxAndroid extends React.Component<Props, State> {
  static displayName = 'Checkbox.Android';

  state = {
    scaleAnim: new Animated.Value(1),
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status === this.props.status) {
      return;
    }

    const checked = this.props.status === 'checked';
    Animated.sequence([
      Animated.timing(this.state.scaleAnim, {
        toValue: 0.85,
        duration: checked ? 200 : 0,
      }),
      Animated.timing(this.state.scaleAnim, {
        toValue: 1,
        duration: checked ? 200 : 350,
      }),
    ]).start();
  }

  render() {
    const { status, disabled, onPress, theme, ...rest } = this.props;
    const checked = status === 'checked';
    const indeterminate = status === 'indeterminate';
    const checkedColor = this.props.color || theme.colors.primary;
    const checkboxColor = checked ? checkedColor : theme.colors.light;
    const rippleColor = checkedColor


    const borderWidth = this.state.scaleAnim.interpolate({
      inputRange: [0.8, 1],
      outputRange: [7, 0],
    });

    const icon = indeterminate
      ? 'indeterminate-check-box'
      : checked
        ? 'check-box'
        : 'check-box-outline-blank';

    return (
      <Touchable
        {...rest}
        borderless={true}
        rippleColor={rippleColor}
        onPress={onPress}
        disabled={disabled}
        accessibilityTraits={disabled ? ['button', 'disabled'] : 'button'}
        accessibilityComponentType="button"
        accessibilityRole="button"
        accessibilityStates={disabled ? ['disabled'] : undefined}
        accessibilityLiveRegion="polite"
        style={{ borderRadius: 18, width: 36, height: 36, padding: 6, opacity: (disabled) ? 0.5 : 1 }}>
        <Animated.View style={{ transform: [{ scale: this.state.scaleAnim }] }}>
          <Icon
            allowFontScaling={false}
            source={icon}
            size={24}
            color={checkboxColor}
          />
          <View style={[StyleSheet.absoluteFill, styles.fillContainer]}>
            <Animated.View style={[ styles.fill,
            { borderColor: checkboxColor },
            { borderWidth },
            ]}/>
          </View>
        </Animated.View>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    width: 36,
    height: 36,
    padding: 6,
  },
  fillContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    height: 14,
    width: 14,
  },
});

export default withTheme(CheckboxAndroid);