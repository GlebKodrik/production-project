import { rtkQueryApi } from '@/services/api/rtk-query-api';
import { TArticleArguments, TRateArticleData } from '@/feature/article-rating/requests/types';

const requestArticleRating = rtkQueryApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticleRating: builder.query<TRateArticleData[], TArticleArguments>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          userId,
          articleId,
        },
      }),
    }),
    addRateArticle: builder.mutation<void, TRateArticleData>({
      query: (body) => ({
        url: '/article-ratings',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetArticleRatingQuery, useAddRateArticleMutation } = requestArticleRating;
