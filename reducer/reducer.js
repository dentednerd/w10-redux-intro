import * as types from '../actions/types';

export const initialState = {
    basket: {},
    stock: {
        'Tomato': 10,
        'Tofu': 10,
        'Potato': 10
    }
};

export function reducer (prevState = initialState, action) {
    if (!action) return prevState;
    if (!prevState.stock[action.item]) return prevState;

    if (action.type === types.ADD_TO_BASKET) {
        if (!action.item) return prevState;
        const newState = Object.assign({}, prevState);
        
        // update basket
        newState.basket = Object.assign({}, newState.basket);
        newState.basket[action.item] = 1;

        // update stock
        newState.stock = Object.assign({}, newState.stock);
        newState.stock[action.item]--;

        return newState;
    }

    if (action.type === types.REMOVE_FROM_BASKET) {
        if (!action.type) return prevState;
        const newState = Object.assign({}, prevState);

        //update basket
        newState.basket = Object.assign({}, newState.basket);
        delete newState.basket[action.item];

        // update stock
        newState.stock = Object.assign({}, newState.stock);
        newState.stock[action.item]++;

        return newState;
    }

    if (action.type === types.REMOVE_FROM_STOCK) {
        if (!action.type) return prevState;
        const newState = Object.assign({}, prevState);

        // update stock
        newState.stock = Object.assign({}, newState.stock);
        delete newState.stock[action.item];

        return newState;
    }

    return prevState;
}