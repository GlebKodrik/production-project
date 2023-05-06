import { Popover as HPopover } from '@headlessui/react';
import { TProps } from './types';
import { useFloating } from '@/hooks/use-floating';
import styles from './popover.module.scss';
import { Button } from '../button';
import Portal from '../portal';

export const Popover = ({
  trigger,
  className,
  children,
  placement = 'bottom',
  indent = 0,
}: TProps) => {
  const {
    refs, y, strategy, x,
  } = useFloating({ placement, indent });

  return (
    <HPopover className={className} as="div">
      <HPopover.Button className={styles.trigger} as={Button} ref={refs.setReference}>
        {trigger}
      </HPopover.Button>
      <Portal>
        <HPopover.Panel
          className={styles.panel}
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content',
          }}
        >
          {children}
        </HPopover.Panel>
      </Portal>
    </HPopover>
  );
};
