import { types } from './linksTypes';

export const initialLinksState = {
  links: [],
};

export const linksReducer = (state = initialLinksState, action) => {
  switch (action.type) {
    case types.addLink:
      return {
        ...state,
        links: [...state.links, action.payload.link],
      };
    case types.deleteAllLinks:
      return {
        ...state,
        links: [],
      };
    default:
      return {
        ...state,
      };
  }
};