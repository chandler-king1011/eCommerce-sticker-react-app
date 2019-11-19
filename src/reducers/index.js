import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import { HeaderNavbarReducer } from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  HeaderNavbarReducer
});

export default rootReducer;