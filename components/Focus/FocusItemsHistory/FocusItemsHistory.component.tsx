//Types
import { ReactElement } from 'react';

//Constants
import { styles } from './FocusItemsHistory.styles';

//Components
import FocusItem from '@components/Focus/FocusItem/FocusItem.component';

//React Native
import { View, FlatList, Text } from 'react-native';

//Interface for Props
interface FocusItemsHistoryProps {
  history: string[];
}

export default function FocusItemsHistory({
  history,
}: FocusItemsHistoryProps): ReactElement {
  return (
    <View style={styles.container}>
      {history.length ? (
        <FlatList
          data={history}
          contentContainerStyle={styles.listContentContainer}
          renderItem={(item) => <FocusItem>{item.item}</FocusItem>}
        />
      ) : (
        <Text style={styles.noFocusItemsText}>No Focus items</Text>
      )}
    </View>
  );
}
