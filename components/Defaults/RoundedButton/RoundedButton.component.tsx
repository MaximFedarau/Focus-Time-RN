//Types
import React, { ReactElement } from 'react';
import { ButtonProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

//Constants
import { styles } from './RoundedButton.styles';

//React Native
import { TouchableOpacity, Text } from 'react-native';

//Interface for Props
interface RoundedButtonProps extends ButtonProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: number;
}

export default function RoundedButton({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}: RoundedButtonProps): ReactElement {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} {...props}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
}
