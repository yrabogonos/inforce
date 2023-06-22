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

    function contains(item){
        for(let i=0; i<state.items.length; i++){
            if(state.items[i].title === action.item.title){
                return true;
            }
        }
        return false;
    }

    switch (action.type) {

        case 'SET_INITIAL_STATE':
            state.products = action.products;
            return state;

        case ADD_ITEM:  
           
            if(!contains(action.item)){
                alert('Товар добавлено в корзину');
                state.items.push(action.item);
            }
            else{
                alert('Товар уже додано у ваш кошик!')
            }
            
            return state;
        case UPDATE_ITEM: 
            for(let i=0; i<state.items.length; i++){
                if(state.items[i].title === action.changeditem.title){
                    state.items[i] = action.changeditem;
                }
            }
            return state;
        case REM_ITEM:
            state.items = state.items.filter(item => item.title!=action.delItem.title);
            return state;

        case REM_ALL:
            state.items = [];
            return state;
        default:
            return state;
    }
}
export const addItemActionCreator = (itemToAdd) => {
    return {
        type: ADD_ITEM,
        item: itemToAdd
    }
}
export const updateItemActionCreator = (itemToChange) => {
    return {
        type: UPDATE_ITEM,
        changeditem: itemToChange
    }
}
export const removeItemActionCreator = (itemToDell) => {
    return {
        type: REM_ITEM,
        delItem: itemToDell
    }
}
export const removeAllActionCreator = () => {
    return {
        type: REM_ALL
    }
}

export const setInitialState = initialState => {
    return {
      type: SET_INITIAL_STATE,
      products: initialState
    };
};

export default ProductReducer;