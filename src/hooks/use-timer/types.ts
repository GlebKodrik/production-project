export type TReturn = {
  startTimer: () => void;
  stopTimer?: () => void;
  seconds: number;
  clearTimer: () => void;
};
