//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from './Countdown.styles';

//Components
import CountdownElement from '@components/Countdown/Countdown/Countdown.component';
import RoundedButton from '@components/Defaults/RoundedButton/RoundedButton.component';

//React Native
import { View, Text } from 'react-native';

//Interface for Props
interface CountdownProps {
  focusItem: string;
}

export default function Countdown({ focusItem }: CountdownProps): ReactElement {
  const [isPaused, setIsPaused] = React.useState(true);

  function onPressStartButtonHandler() {
    setIsPaused(!isPaused);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountdownElement
          onProgress={() => {
            console.log('tick');
          }}
          onEnd={() => {
            console.log('ticking ended');
          }}
          isPaused={isPaused}
        />
      </View>
      <Text style={{ color: 'white' }}>{focusItem}</Text>
      <View style={styles.buttonContainer}>
        <RoundedButton
          title={isPaused ? 'Start' : 'Pause'}
          onPress={onPressStartButtonHandler}
        />
      </View>
    </View>
  );
}
