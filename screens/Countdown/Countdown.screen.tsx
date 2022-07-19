//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from './Countdown.styles';
import { LIGHT_CORNFLOWER_BLUE } from '@constants/colors';

//Components
import CountdownElement from '@components/Countdown/Countdown/Countdown.component';
import RoundedButton from '@components/Defaults/RoundedButton/RoundedButton.component';

//React Native
import { View, Text, Vibration } from 'react-native';

//React Native Paper
import { ProgressBar } from 'react-native-paper';

//Interface for Props
interface CountdownProps {
  focusItem: string;
}

export default function Countdown({ focusItem }: CountdownProps): ReactElement {
  const [isPaused, setIsPaused] = React.useState(true);
  const [progress, setProgress] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0.05);

  function onPressStartButtonHandler() {
    setIsPaused(!isPaused);
  }

  function onProgressHandler(progress: number) {
    setProgress(progress);
  }

  function onEndHandler() {
    const PATTERN = [1 * 1000, 1 * 1000, 1 * 1000]; // 3 times with pause
    Vibration.vibrate(PATTERN);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountdownElement
          minutes={minutes}
          onProgress={onProgressHandler}
          onEnd={onEndHandler}
          isPaused={isPaused}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusItem}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          style={styles.progress}
          color={LIGHT_CORNFLOWER_BLUE}
        />
      </View>
      <View style={styles.buttonContainer}>
        <RoundedButton
          title={isPaused ? 'Start' : 'Pause'}
          onPress={onPressStartButtonHandler}
        />
      </View>
    </View>
  );
}
