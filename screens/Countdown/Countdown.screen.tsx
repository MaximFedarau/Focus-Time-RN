//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from './Countdown.styles';
import { LIGHT_CORNFLOWER_BLUE } from '@constants/colors';

//Components
import CountdownElement from '@components/Countdown/Countdown/Countdown.component';
import ControlButtons from '@components/Countdown/ControlButtons/ControlButtons.component';

//Expo
import { useKeepAwake } from 'expo-keep-awake';

//React Native
import { View, Text, Vibration } from 'react-native';

//React Native Paper
import { ProgressBar } from 'react-native-paper';

//Interface for Props
interface CountdownProps {
  focusItem: string;
  clearFocusItem: () => void;
}

export default function Countdown({
  focusItem,
  clearFocusItem,
}: CountdownProps): ReactElement {
  useKeepAwake();

  const [isPaused, setIsPaused] = React.useState(true);
  const [progress, setProgress] = React.useState(1);
  const [minutes, setMinutes] = React.useState(0.5);

  function onProgressHandler(progress: number) {
    setProgress(() => {
      if (progress === 0) {
        setIsPaused(true);
      }
      return progress;
    });
  }

  function onEndHandler() {
    const PATTERN = [1 * 1000, 1 * 1000, 1 * 1000]; // 3 times with pause
    Vibration.vibrate(PATTERN);
  }

  function onDecreaseTimeHandler() {
    if (progress * minutes < 0.25) {
      setMinutes(0);
      return;
    }
    setMinutes(progress * minutes - 0.25);
  }

  function onStartButtonHandler() {
    if (!progress) {
      clearFocusItem();
    }
    setIsPaused(!isPaused);
  }

  function onIncreaseTimeHandler() {
    setMinutes((prevMinutes) => {
      // ! fix for issue, when minutes is going from 0 seconds to 15 seconds only one time instead of multiple.
      if (prevMinutes === 0.25 && progress * minutes === 0) {
        return progress * minutes + 0.25 + Math.random() / 1000 + 0.0001;
      } // ! also we can write a method, which clears this 'remainder' in other cases.
      // ! For example, using fixed number instead of random number.
      return progress * minutes + 0.25;
    });
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
          <Text style={styles.task}>
            {focusItem.length >= 64
              ? focusItem.substring(0, 64) + '...'
              : focusItem}
          </Text>
          <Text style={styles.homeLabel} onPress={clearFocusItem}>
            Go Home
          </Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          style={styles.progress}
          color={LIGHT_CORNFLOWER_BLUE}
        />
      </View>
      <ControlButtons
        startButtonTitle={!progress ? 'Home' : isPaused ? 'Start' : 'Pause'}
        onStartButtonHandler={onStartButtonHandler}
        onDecreaseTimeHandler={onDecreaseTimeHandler}
        onIncreaseTimeHandler={onIncreaseTimeHandler}
      />
    </View>
  );
}
