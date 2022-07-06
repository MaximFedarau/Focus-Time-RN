//Types
import { ReactElement } from 'react';

//Constants
import { styles } from '@screens/Focus/Focus.styles';

//React Native
import { View, Text } from 'react-native';

export default function Focus(): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature</Text>
    </View>
  );
}
