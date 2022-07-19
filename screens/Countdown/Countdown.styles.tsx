//React Native
import { StyleSheet } from 'react-native';

//Constants
import { WHITE } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  countdown: {
    flex: 0.45,
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
  progressContainer: {
    flex: 0.1,
    marginTop: 8,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  progress: {
    height: 8,
  },
  buttonContainer: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
