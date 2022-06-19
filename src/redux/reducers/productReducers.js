import * as types from '../type/type'

const initialState = {
        products:[],
        product:{}
}
const productReducers =(state = initialState, action) => {
        switch (action.type) {
                case types.GET_DATA:
                        return {
                                ...state,
                                products:action.payload.data
                        }
                        break;
        
                default:
                        return state
                        break;
        }
}
export default productReducers;