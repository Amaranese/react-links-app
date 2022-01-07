import { types } from './uiTypes';

const initialUiState = {
  isLoading: null,
  error: null,
};

export const uiReducer = (state = initialUiState, action) => {
  switch (action.types) {
    default:
      return {
        ...state,
      };
  }
};