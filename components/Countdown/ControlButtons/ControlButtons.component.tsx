//Types
import { ReactElement } from 'react';

//Constants
import { styles } from './ControlButtons.styles';

//Components
import RoundedButton from '@components/Defaults/RoundedButton/RoundedButton.component';

//React Native
import { View } from 'react-native';

//Interface for Props
interface ControlButtonsProps {
  startButtonTitle: string;
  onDecreaseTimeHandler: () => void;
  onStartButtonHandler: () => void;
  onIncreaseTimeHandler: () => void;
}

export default function ControlButtons({
  startButtonTitle,
  onDecreaseTimeHandler,
  onIncreaseTimeHandler,
  onStartButtonHandler,
}: ControlButtonsProps): ReactElement {
  return (
    <View style={styles.buttonContainer}>
      <RoundedButton
        title="-15"
        size={80}
        style={styles.leftButtonContainer}
        onPress={onDecreaseTimeHandler}
      />
      <RoundedButton
        title={startButtonTitle}
        size={112}
        onPress={onStartButtonHandler}
      />
      <RoundedButton
        title="+15"
        size={80}
        style={styles.rightButtonContainer}
        onPress={onIncreaseTimeHandler}
      />
    </View>
  );
}
