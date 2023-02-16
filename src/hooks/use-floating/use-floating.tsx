import {
  autoUpdate,
  flip,
  offset,
  shift,
  useFloating as LibraryHookUseFloating,
} from '@floating-ui/react-dom';
import { TProps, TReturn } from './types';

export const useFloating = (
  {
    placement = 'bottom-end',
    indent = 2,
  }: TProps,
): TReturn => {
  const {
    x, y, strategy, refs,
  } = LibraryHookUseFloating({
    placement,
    middleware: [
      offset(indent),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  return {
    refs, y, strategy, x,
  };
};
