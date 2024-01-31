import { combineReducers } from 'redux'
import ReferingProviderReducer from '../slices/refering-provider/reducer'
import TabReducer from '../slices/tabs/reducer'


const rootReducer = combineReducers({
    ReferingProvider: ReferingProviderReducer,
    TabReducer: TabReducer
})

export default rootReducer