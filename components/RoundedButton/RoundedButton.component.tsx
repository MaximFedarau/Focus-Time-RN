//Types
import React, { ReactElement } from 'react';

//Constants
import { WHITE } from '@constants/colors';

//React Native
import { TouchableOpacity, Text } from 'react-native';

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}): ReactElement => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = (size: number) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: WHITE,
    borderWidth: 2,
  },
  text: { color: WHITE, fontSize: size / 3 },
});
