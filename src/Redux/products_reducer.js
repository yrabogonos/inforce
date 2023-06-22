const ADD_ITEM = 'ADD-ITEM';
const UPDATE_ITEM = 'UPDATE-ITEM';
const REM_ITEM = 'REM_ITEM';
const REM_ALL = 'REM_ALL';

const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

let initialState =  {
    products:[
        
    ],
}


const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_INITIAL_STATE:
            state.products = action.products;
            return state;

        case ADD_ITEM:  
            state.products.push(action.product);
            return state;
    //     case UPDATE_ITEM: 
    //         for(let i=0; i<state.items.length; i++){
    //             if(state.items[i].title === action.changeditem.title){
    //                 state.items[i] = action.changeditem;
    //             }
    //         }
    //         return state;
    //     case REM_ITEM:
    //         state.items = state.items.filter(item => item.title!=action.delItem.title);
    //         return state;

    //     case REM_ALL:
    //         state.items = [];
    //         return state;
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
// export const updateItemActionCreator = (itemToChange) => {
//     return {
//         type: UPDATE_ITEM,
//         changeditem: itemToChange
//     }
// }
// export const removeItemActionCreator = (itemToDell) => {
//     return {
//         type: REM_ITEM,
//         delItem: itemToDell
//     }
// }
// export const removeAllActionCreator = () => {
//     return {
//         type: REM_ALL
//     }
// }

export const setInitialState = initialState => {
    return {
      type: SET_INITIAL_STATE,
      products: initialState
    };
};

export default ProductReducer;