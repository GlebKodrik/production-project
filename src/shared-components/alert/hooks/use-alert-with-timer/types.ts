export type TProps = {
  autoHideDuration?: number;
  autoClose?: boolean;
};

export type TReturn = {
  showAlert: boolean;
  clearTimerForAutoCloseAlert?: Function;
  startTimerForAutoCloseAlert?: any;
  stopTimerForAutoCloseAlert?: Function;
  percentAutoClose?: number;
};
