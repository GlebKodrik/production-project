import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { TVariantView } from 'shared-components/article-card';
import { TArticle } from 'pages/articles/types';
import { TArticlesScheme } from './types';
import { requestGetArticles } from './requests/request-get-articles';

const initialState: TArticlesScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinished: false,
  isHasMore: false,
  variantView: ControlLocalStorage.getValueLocalStorage<TVariantView>(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE),
  page: 1,
  limit: 4,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setVariantView(state, action: PayloadAction<TVariantView>) {
      state.data = [];
      state.page = 1;
      state.variantView = action.payload;
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE, action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticles.pending, (state) => {
        state.error = undefined;
        state.isFinished = false;
        state.isLoading = true;
      })
      .addCase(requestGetArticles.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.isLoading = false;
        state.isFinished = true;
        state.data = [...state.data, ...action.payload];
        state.isHasMore = action.payload.length > 0;
      })
      .addCase(requestGetArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isFinished = true;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articlesSlice;
export const { reducer: articleReducer } = articlesSlice;
