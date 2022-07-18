//React Native
import { StyleSheet } from 'react-native';

//Constants
import { WHITE } from '@constants/colors';

export const styles = (size: number) =>
  StyleSheet.create({
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
