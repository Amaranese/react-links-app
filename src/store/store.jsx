import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { uiReducer } from './ui/uiReducers';
import { linksReducer } from './links/linksReducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const reducers = combineReducers({
  ui: uiReducer,
  links: linksReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;