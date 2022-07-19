//Types
import { ReactElement } from 'react';

//Constants
import { styles } from './FocusItem.styles';

//React Native
import { View, Text } from 'react-native';

//Interface for Props
interface FocusItemProps {
  children: string;
}

export default function FocusItem({ children }: FocusItemProps): ReactElement {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{children}</Text>
    </View>
  );
}
