import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/shared-components/rating-card';
import { useAddRateArticleMutation, useGetArticleRatingQuery } from './requests/request-add-article-rating';
import { getUser } from '@/redux-stores/stores/user/selectors/get-user';
import { Skeleton } from '@/shared-components/skeleton';
import { notificationsActions } from '@/feature/notifications/stores/notifications';
import { useAppDispatch } from '@/hooks/use-app-dispatch';

export const ArticleRating = ({ id, className }: { id: string, className: string }) => {
  const dispatch = useAppDispatch();
  const userData = useSelector(getUser);
  const [feedback, setFeedback] = useState('');
  const [star, setStar] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading } = useGetArticleRatingQuery({
    articleId: id,
    userId: userData?.id || '',
  });

  const [fetchAddRateArticle] = useAddRateArticleMutation();
  const onChangeStar = (starId: number) => {
    setIsOpen(true);
    setStar(starId);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const rating = data?.[data.length - 1];
    if (rating) {
      setStar(rating?.rate);
    }
  }, [data]);
  if (isLoading) {
    return <Skeleton width="100%" height="120px" />;
  }
  const onSubmit = () => {
    try {
      fetchAddRateArticle({
        articleId: id,
        userId: userData?.id || '',
        rate: star,
        feedback,
      });
    } catch (e) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: 'Ошибка при сохранении рейтинга',
      }));
    }
    onCloseModal();
  };

  return (
    <RatingCard
      className={className}
      selectStar={star}
      onSelect={onChangeStar}
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={onSubmit}
      onChangeFeedback={setFeedback}
      feedback={feedback}
      title="Оцените статью"
    />
  );
};
