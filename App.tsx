//Constants
import { SPACE_CADET } from '@constants/colors';

//Screens
import Focus from '@screens/Focus/Focus.screen';

//Expo
import { StatusBar } from 'expo-status-bar';

//React Native
import { StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Focus />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPACE_CADET,
  },
});
