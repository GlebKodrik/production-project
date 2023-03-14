export type TEvents = {
  id: string,
  title: string,
  description: string,
  userId: string,
  href?: string
};

export type TEventsScheme = {
  eventsList?: TEvents[],
  isLoading: boolean,
  error?: string,
  isFinished: boolean,
};
