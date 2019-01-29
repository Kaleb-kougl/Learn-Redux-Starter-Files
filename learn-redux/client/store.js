import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import default data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// needs reducer to interact with and defualt state
const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);


// hot reloading reducers
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReduer = require('./reducers/index').default;
    store.replaceReducer(nextRootReduer);
  });
}

export default store;