import {expect} from 'chai';
import {reducer, initialState} from '../reducer/reducer';
import * as actions from '../actions/actions';

describe('REDUCER', () => {
    it('is a function', () => {
        expect(reducer).to.be.a('function');
    });

    describe('action: ADD_TO_BASKET', () => {
        it('returns the updated state', () => {
            const action = actions.addToBasket('Tofu');
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                basket: {
                    'Tofu': {
                            quantity: 1,
                            price: 1.50
                    }
                },
                stock:  {
                   'Tomato': {
                             quantity: 10,
                             price: 0.50
                           },
                   'Tofu': {
                           quantity: 9,
                           price: 1.50
                           },
                   'Potato': {
                             quantity: 10,
                             price: 0.20
                            }
                }
            });
        });

        it('does nothing if the requested item is not in stock', () => {
            const action = actions.addToBasket('Mung beans');
            const newState = reducer(initialState, action);
            expect(newState).to.eql(initialState);
            expect(newState).to.equal(initialState);
        });

        it('does not mutate the initialState', () => {
            const action = actions.addToBasket('Tofu');
            const newState  = reducer(initialState, action);
            expect(newState).to.not.equal(initialState);
            expect(newState.basket).to.not.equal(initialState.basket);
        });
    });

    describe('action: REMOVE_FROM_BASKET', () => {
        it('returns the updated state', () => {
            const action = actions.removeFromBasket('Tofu');
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                basket: {},
                stock:  {
                   'Tomato': {
                             quantity: 10,
                             price: 0.50
                           },
                   'Tofu': {
                           quantity: 11,
                           price: 1.50
                           },
                   'Potato': {
                             quantity: 10,
                             price: 0.20
                            }
                }
            })
        })
    })

    describe('action: REMOVE_FROM_STOCK', () => {
        it('returns the updated state', () => {
            const action = actions.removeFromStock('Tofu');
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                basket: {},
                stock:  {
                   'Tomato': {
                             quantity: 10,
                             price: 0.50
                           },
                   'Potato': {
                             quantity: 10,
                             price: 0.20
                            }
                }
            })
        })
    })

    describe('action: ADD_TO_STOCK', () => {
        it('returns the updated state', () => {
            const toUpdate = {product: 'not popcorn', quantity: 5, price: 100}
            const action = actions.addToStock(toUpdate);
            const newState = reducer(initialState, action);
            expect(newState).to.eql({
                basket: {},
                stock: {
                   'Tomato': {
                             quantity: 10,
                             price: 0.50
                           },
                   'Tofu': {
                           quantity: 10,
                           price: 1.50
                           },
                   'Potato': {
                             quantity: 10,
                             price: 0.20
                            }
                }
            })
        })
    })
});