export type TProps = {
  autoHideDuration?: number;
  autoClose?: boolean;
  closeAlert?: Function;
};

export type TReturn = {
  showAlert: boolean;
  clearTimerForAutoCloseAlert?: Function;
  startTimerForAutoCloseAlert?: any;
  stopTimerForAutoCloseAlert?: Function;
  percentAutoClose?: number;
};
