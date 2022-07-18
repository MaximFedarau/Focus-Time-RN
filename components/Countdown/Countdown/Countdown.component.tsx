//Types
import React, { ReactElement } from 'react';

//Constants
import { WHITE } from '@constants/colors';

//React Native
import { Text, StyleSheet } from 'react-native';

//Interface for Props
interface CountdownProps {
  minutes: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
}

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);
export const Countdown = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}: CountdownProps): ReactElement => {
  const interval = React.useRef<NodeJS.Timer | null>(null);

  const [millis, setMillis] = React.useState<number | null>(null);

  const countDown = () => {
    setMillis((time) => {
      if (!time) return time; // type checking
      if (time === 0) {
        clearInterval(interval.current!);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  React.useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  React.useEffect(() => {
    if (!millis) return; // type checking
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  React.useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current!);
  }, [isPaused]);

  const minute = Math.floor(millis! / 1000 / 60) % 60;
  const seconds = Math.floor(millis! / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 80,
    fontWeight: 'bold',
    color: WHITE,
    padding: 24,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
