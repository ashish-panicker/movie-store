import { createFeature, createReducer, on } from '@ngrx/store';
import { DashboardState } from '../types/state/dashboard-state';
import { dashBoardActions } from './actions';

const initialState: DashboardState = {
  data: null,
  isLoading: false,
  error: null,
};

const dashBoardFeature = createFeature({
  name: 'movies',
  reducer: createReducer(
    initialState,
    on(dashBoardActions.load, (state) => ({
      ...state,
      isLoading: true,
      error: null,
    })),
    on(dashBoardActions.loadSuccess, (state, action) => {
      return {
        ...state,
        data: action,
        isLoading: false,
        error: null,
      };
    }),
    on(dashBoardActions.loadFailure, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.errors,
    }))
  ),
});

export const {
  name: loadFeatureKey,
  reducer: loadDataReducer,
  selectData,
  selectIsLoading,
  selectError,
} = dashBoardFeature;
