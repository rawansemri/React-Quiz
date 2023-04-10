import {combineReducers, createStore , compose , applyMiddleware} from 'redux'
 import mathReducer from './Math/reducer';
 import computerReducer from './Computer/reducer';
 import scienceReducer from './Science/reducer';
 import englishReducer from './English/reducer';
 import chemistryReducer from './Chemistry/reducer';
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducers = combineReducers({
    mathReducer,
    computerReducer,
    scienceReducer,
    englishReducer,
    chemistryReducer
})
const Store = createStore(allReducers,{}, composeEnhancers(applyMiddleware(thunk)));

export default Store;