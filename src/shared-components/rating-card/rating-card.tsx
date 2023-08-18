import React from 'react';
import cn from 'classnames';
import { Textarea } from 'shared-components/textarea';
import { TProps } from './types';
import { StarRating } from '@/shared-components/star-rating';
import { Typography } from '@/shared-components/typography';
import styles from './rating-card.module.scss';
import { Modal } from '@/shared-components/modal';
import { Button } from '@/shared-components/button';

export const RatingCard = ({
  selectStar,
  onSelect,
  title = 'Как вам статья?',
  className,
  onSubmit,
  ...props
}: TProps) => {
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (props.isOpen) {
      props.onChangeFeedback(event.target.value);
    }
  };

  return (
    <>
      <div className={cn(className, styles.wrapper)}>
        <Typography className={styles.title} size="large">{title}</Typography>
        <StarRating selectStar={selectStar} onSelect={onSelect} />
      </div>
      {props.isOpen && (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <form onSubmit={onSubmit}>
            <Typography className={styles.titleModal} size="large" color="primary">
              Оставьте пожалуйста
              отзыв😃
            </Typography>
            <Textarea
              value={props.feedback || ''}
              onChange={onChange}
              className={styles.textarea}
              placeholder="Оставьте свой отзыв"
            />
            <Button
              type="submit"
              color="primary"
              variant="outline"
              className={styles.button}
              disabled={!props.feedback}
            >
              Отправить
            </Button>
          </form>
        </Modal>
      )}
    </>
  );
};
