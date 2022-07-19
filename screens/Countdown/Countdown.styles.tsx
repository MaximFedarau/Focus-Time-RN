//React Native
import { StyleSheet } from 'react-native';

//Constants
import { WHITE } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    paddingTop: 24,
  },
  title: {
    color: WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: WHITE,
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
