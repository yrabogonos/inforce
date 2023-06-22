const ADD_ITEM = 'ADD-ITEM';
const REM_ITEM = 'REM_ITEM';
const LOAD_TO_DEL =  'LOAD-TO-DEL';
const CLEAR_LOAD_TO_DEL = 'CLEAR-LOAD-TO-DEL';


const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

let initialState =  {
    products:[
        
    ],
    idToDelete: NaN,
}


const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIAL_STATE:
            state.products = action.products;
            return state;

        case ADD_ITEM:  
            state.products.push(action.product);
            return state;

        case REM_ITEM:
            state.products = state.products.filter(item => item.id!=state.idToDelete);
            return state;
        case LOAD_TO_DEL:
            console.log(state);
            state.idToDelete = action.id;
            return state;
        case CLEAR_LOAD_TO_DEL:
            console.log(state);
            state.idToDelete = NaN;
            return state;
        default:
            return state;
     }
}
export const addItemActionCreator = (productToAdd) => {
    return {
        type: ADD_ITEM,
        product: productToAdd
    }
}

export const removeItemActionCreator = () => {
    return {
        type: REM_ITEM,
     
    }
}


export const setInitialState = initialState => {
    return {
      type: SET_INITIAL_STATE,
      products: initialState
    };
};
export const loadToDeleteActionCreator = (id) => {
    return {
      type: LOAD_TO_DEL,
      id: id
    };
};
export const clearLoadToDeleteActionCreator = () => {
    return {
      type: CLEAR_LOAD_TO_DEL,
    };
};

export default ProductReducer;