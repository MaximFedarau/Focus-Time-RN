//React Native
import { StyleSheet } from 'react-native';

//Constants
import { WHITE } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    alignItems: 'center',
  },
  noFocusItemsText: {
    color: WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
