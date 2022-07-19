//React Native
import { StyleSheet } from 'react-native';

//Constants
import { WHITE } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: WHITE,
    padding: 16,
    borderRadius: 16,
    overflow: 'hidden',
    minWidth: '95%',
    alignItems: 'center',
  },
  item: {
    fontSize: 20,
    color: 'black',
    maxWidth: 300,
  },
});
