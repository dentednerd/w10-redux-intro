import * as types from './types';

export function addToBasket(item){
    return {
        type: types.ADD_TO_BASKET,
        item
    };
}

export function removeFromBasket(item) {
    return {
        type: types.REMOVE_FROM_BASKET,
        item
    };
}

export function addToStock(item){
    return {
        type: types.ADD_TO_STOCK,
        item
    };
}

export function removeFromStock(item) {
    return {
        type: types.REMOVE_FROM_STOCK,
        item
    };
}