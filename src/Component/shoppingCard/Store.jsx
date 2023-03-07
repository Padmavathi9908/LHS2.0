import {createstore, applyMiddleware} from 'redux';
import { connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = [thunk]

const store = createstore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;