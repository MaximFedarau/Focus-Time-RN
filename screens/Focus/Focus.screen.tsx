//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from '@screens/Focus/Focus.styles';

//Components
import RoundedButton from '@components/RoundedButton/RoundedButton.component';

//React Native
import { View } from 'react-native';

//React Native Paper
import { TextInput } from 'react-native-paper';

//Interface for Props
interface FocusProps {
  addFocusItem: React.Dispatch<React.SetStateAction<string>>;
}

export default function Focus({ addFocusItem }: FocusProps): ReactElement {
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
    </View>
  );
}
