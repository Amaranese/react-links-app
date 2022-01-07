import { types } from './linksTypes';

export const addLink = (link) => ({
  type: types.addLink,
  payload: {
    link,
  },
});

export const deleteAllLinks = () => ({
  type: types.deleteAllLinks,
});