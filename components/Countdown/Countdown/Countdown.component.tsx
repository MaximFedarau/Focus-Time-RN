// * Behaviour of Countdown
/* Main useEffect tracks isPaused value. If countdown is paused, it stops countdown and clears interval.
Also it provides cleanup function.
When isPaused initialized and it's true, it set up interval for countDown method.
countDown method decreases by 1 second general time value and checks if time is not 0. In this case, timer is stopped.
useEffect, which depends on minutes just sets formatted milliseconds (general time value).
useEffect, which depends on general time value just runs onProgress method (for linear progress).  */

//Types
import React, { ReactElement } from 'react';

//Constants
import { styles } from './Countdown.styles';
import { minutesToMillis } from '@utils/minutesToMillis';
import { formatTime } from '@utils/formatTime';

//React Native
import { Text } from 'react-native';

//Interface for Props
interface CountdownProps {
  minutes?: number;
  isPaused?: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
}

export default function Countdown({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: CountdownProps): ReactElement {
  // * Hooks
  const interval = React.useRef<NodeJS.Timer | null>(null); // ! does not cause rerenders
  const [millis, setMillis] = React.useState<number>(0);

  function countDown() {
    setMillis((time) => {
      const timeLeft = time - 1000;
      if (timeLeft === 0) {
        if (interval.current) clearInterval(interval.current);
        onEnd();
      }
      return timeLeft;
    });
  }

  // * Effects

  React.useEffect(() => {
    if (minutesToMillis(minutes) < 1000) {
      setMillis(0);
      return;
    }
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  React.useEffect(() => {
    if (millis <= 0) {
      onProgress(0);
      return;
    }
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return function cleanup() {
      if (interval.current) return clearInterval(interval.current);
    };
  }, [isPaused]);

  // * Utils
  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
}
