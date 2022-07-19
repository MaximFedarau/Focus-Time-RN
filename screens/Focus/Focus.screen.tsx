//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from '@screens/Focus/Focus.styles';

//Components
import RoundedButton from '@components/Defaults/RoundedButton/RoundedButton.component';
import FocusItemsHistory from '@components/Focus/FocusItemsHistory/FocusItemsHistory.component';

//React Native
import { View } from 'react-native';

//React Native Paper
import { TextInput } from 'react-native-paper';

//Interface for Props
interface FocusProps {
  addFocusItem: (focusItem: string) => void;
  focusItemsHistory: string[];
}

export default function Focus({
  addFocusItem,
  focusItemsHistory,
}: FocusProps): ReactElement {
  const [focusItem, setFocusItem] = React.useState<string>('');

  function onButtonPressHandler() {
    addFocusItem(focusItem.trim());
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setFocusItem}
          value={focusItem}
          label="What would you like to focus on?"
          style={styles.input}
        />
        <RoundedButton size={48} title="+" onPress={onButtonPressHandler} />
      </View>
      <FocusItemsHistory history={focusItemsHistory} />
    </View>
  );
}
