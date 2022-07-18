//Types
import React, { ReactElement } from 'react';

//Constants
import { SPACE_CADET } from '@constants/colors';

//Screens
import Focus from '@screens/Focus/Focus.screen';

//Expo
import { StatusBar } from 'expo-status-bar';

//React Native
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function App(): ReactElement {
  const [focusItem, setFocusItem] = React.useState<string>('');
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        {focusItem.length > 0 ? (
          <Text style={{ color: 'white' }}>Timer {`${focusItem}`}</Text>
        ) : (
          <Focus addFocusItem={setFocusItem} />
        )}
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
