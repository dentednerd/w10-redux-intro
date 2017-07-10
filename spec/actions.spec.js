import {expect} from 'chai';
import * as actions from '../actions/actions';
import * as types from '../actions/types';

describe ('ACTIONS', () => {
    describe('addToBasket', () => {
        it('returns the expected action', () => {
            expect(actions.addToBasket('Almonds')).to.eql({
                type: types.ADD_TO_BASKET,
                item: 'Almonds'
            })
        })
    })
})