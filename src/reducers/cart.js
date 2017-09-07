import {List} from 'immutable';

const INITIAL_STATE = {
    items: List([
        {
            product: {
                id: 1,
                name: 'IPhone 7',
                price: 300
            },
            qty: 2
        },
        {
            product: {
                id: 2,
                name: 'Samsung S8',
                price: 200
            },
            qty: 3
        },
    ])
};

export default (state = INITIAL_STATE) => {
    return state;
}