import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { TVariantView } from 'shared-components/article-card';
import { TArticle } from 'pages/articles/types';
import { TArticlesScheme } from './types';
import { requestGetArticles } from './requests/request-get-articles';

const initialState: TArticlesScheme = {
  isLoading: false,
  data: undefined,
  error: undefined,
  variantView: ControlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE),
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setVariantView(state, action: PayloadAction<TVariantView>) {
      state.variantView = action.payload;
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestGetArticles.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(requestGetArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleActions } = articlesSlice;
export const { reducer: articleReducer } = articlesSlice;
