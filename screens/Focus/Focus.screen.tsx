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

export default function Focus(): ReactElement {
  const [focusItem, setFocusItem] = React.useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={setFocusItem}
          value={focusItem}
          label="What would you like to focus on?"
          style={styles.input}
        />
        <RoundedButton size={48} title="+" />
      </View>
    </View>
  );
}
