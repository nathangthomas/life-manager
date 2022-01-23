import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

const history = createBrowserHistory();

const configureStore = () => {
    const store = createStore(
        rootReducer(history),
        composeWithDevTools(
           applyMiddleware(routerMiddleware(history))
        )
    );

    return {
        store,
        history
    }
};

export default configureStore;