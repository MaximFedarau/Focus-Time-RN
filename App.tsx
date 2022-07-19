//Types
import React, { ReactElement } from 'react';

//Constants
import { SPACE_CADET } from '@constants/colors';

//Screens
import Focus from '@screens/Focus/Focus.screen';
import Countdown from '@screens/Countdown/Countdown.screen';

//Expo
import { StatusBar } from 'expo-status-bar';

//React Native
import { StyleSheet, SafeAreaView } from 'react-native';

export default function App(): ReactElement {
  const [focusItem, setFocusItem] = React.useState<string>('');
  const [focusItemsHistory, setFocusItemsHistoryHistory] = React.useState<
    string[]
  >([]);

  function addFocusItem(focusItem: string) {
    if (!focusItem.length) return;
    setFocusItemsHistoryHistory([...focusItemsHistory, focusItem]);
    setFocusItem(focusItem);
  }

  function clearFocusItem() {
    setFocusItem('');
  }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        {focusItem.length ? (
          <Countdown focusItem={focusItem} clearFocusItem={clearFocusItem} />
        ) : (
          <Focus
            addFocusItem={addFocusItem}
            focusItemsHistory={focusItemsHistory}
          />
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
