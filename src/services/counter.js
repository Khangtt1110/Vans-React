import { createSlice } from '@reduxjs/toolkit';
import { allProduct } from '~/common/constants/Constants';

const initialState = { allProduct, total: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            const { id } = action.payload;
            state.allProduct.Shoes.find((c) => c.id === id).amount++;
            console.log(
                'id: ',
                state.allProduct.Shoes.find((c) => c.id === id).id,
                'product: ',
                state.allProduct.Shoes.find((c) => c.id === id).amount,
            );
            state.total++;
            console.log('Total product: ', state.total);
        },
    },
});
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
