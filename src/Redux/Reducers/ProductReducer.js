import {actionType} from '../Actions'

const initState = {
    productList: [],
    failedProductList: [],
};

const ProductReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.CREATE_PRODUCT_LIST :
            return {
                ...state,
                productList:  [...state.productList , action.payload]
            };

            case actionType.FAILED_PRODUCT_LIST :
            return {
                ...state,
                failedProductList: [...state.productList , action.payload]
            };
        default:
            return state
    }
};

export default ProductReducer