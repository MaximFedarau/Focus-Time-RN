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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  task: {
    color: WHITE,
    fontSize: 16,
    textAlign: 'center',
  },
  homeLabel: {
    color: WHITE,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
    textDecorationLine: 'underline',
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
});
