import { FETCH_PRODUCT_SUCCESS, DELETE_PRODUCT_SUCCESS } from "./ProductActionTypes";

interface IInType {
    data: any[]
}

const initialState:IInType = {
    data: []
}

const ProductReducer = (state =initialState, action:any)=>{
    switch(action.type) {
        case FETCH_PRODUCT_SUCCESS:
        return {
            ...state, 
            data: action.allProducts
        };
       

        default: return state;
    }

}

export default ProductReducer;