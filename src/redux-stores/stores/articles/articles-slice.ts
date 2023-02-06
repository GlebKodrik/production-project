import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { TVariantView } from 'shared-components/article-card';
import {
  EArticlesSort, TArticlesScheme, TInit,
} from './types';
import { requestGetArticles } from './requests/request-get-articles';
import { TOrderFilter } from '../types/types';
import { TArticle, TArticlesTypes } from '../types/articles';

const initialState: TArticlesScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinished: false,
  isHasMore: false,
  page: 1,
  isInit: false,
  limit: 4,
  filters: {
    type: 'all',
    variantView: 'big',
    order: 'asc',
    search: '',
    sortBy: EArticlesSort.VIEWS,
  },
};

const VIEW_BIG_CARD = 4;
const VIEW_SMALL_CARD = 9;

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setVariantView(state, action: PayloadAction<TVariantView>) {
      state.filters.variantView = action.payload;
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE, action.payload);
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.filters.search = action.payload;
    },
    setType(state, action: PayloadAction<TArticlesTypes>) {
      state.filters.type = action.payload;
    },
    setSortBy(state, action: PayloadAction<EArticlesSort>) {
      state.filters.sortBy = action.payload;
    },
    setOrder(state, action: PayloadAction<TOrderFilter>) {
      state.filters.order = action.payload;
    },
    init(state, action: PayloadAction<TInit>) {
      const searchParams = action.payload.params;
      const variantView = ControlLocalStorage
        .getValueLocalStorage <TVariantView>(LOCAL_STORAGE_KEYS.VARIANT_VIEW_ARTICLE);
      const isBigVariantView = variantView === 'big';
      state.filters.variantView = variantView;
      state.limit = isBigVariantView ? VIEW_BIG_CARD : VIEW_SMALL_CARD;
      state.isInit = true;
      state.filters.order = searchParams.order;
      state.filters.sortBy = searchParams.sort;
      state.filters.search = searchParams.search;
      state.filters.type = searchParams.type;
    },
    clearArticles(state) {
      state.data = [];
      state.page = 1;
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
        state.isHasMore = action.payload.length >= state.limit;
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
