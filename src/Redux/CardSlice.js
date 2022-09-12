import {createSlice} from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        items: [
            {
                id: '1',
                name: 'item_1',
                img: '/card-images/asteroid.png',
                isFlipped: false,
            },
            {
                id: '2',
                name: 'item_2',
                img: '/card-images/astronaut.png',
                isFlipped: false,
            },
            {
                id: '3',
                name: 'item_3',
                img: '/card-images/destroyed.png',
                isFlipped: false,
            },
            {
                id: '4',
                name: 'item_4',
                img: '/card-images/earth.png',
                isFlipped: false,
            },
            {
                id: '5',
                name: 'item_5',
                img: '/card-images/jupiter.png',
                isFlipped: false,
            },
            {
                id: '6',
                name: 'item_6',
                img: '/card-images/planets.png',
                isFlipped: false,
            },
            {
                id: '7',
                name: 'item_7',
                img: '/card-images/red-sun.png',
                isFlipped: false,
            },
            {
                id: '8',
                name: 'item_8',
                img: '/card-images/research.png',
                isFlipped: false,
            },
            {
                id: '9',
                name: 'item_9',
                img: '/card-images/rocket.png',
                isFlipped: false,
            },
            {
                id: '10',
                name: 'item_10',
                img: '/card-images/shooting-star.png',
                isFlipped: false,
            },
            {
                id: '11',
                name: 'item_1',
                img: '/card-images/asteroid.png',
                isFlipped: false,
            },
            {
                id: '12',
                name: 'item_2',
                img: '/card-images/astronaut.png',
                isFlipped: false,
            },
            {
                id: '13',
                name: 'item_3',
                img: '/card-images/destroyed.png',
                isFlipped: false,
            },
            {
                id: '14',
                name: 'item_4',
                img: '/card-images/earth.png',
                isFlipped: false,
            },
            {
                id: '15',
                name: 'item_5',
                img: '/card-images/jupiter.png',
                isFlipped: false,
            },
            {
                id: '16',
                name: 'item_6',
                img: '/card-images/planets.png',
                isFlipped: false,
            },
            {
                id: '17',
                name: 'item_7',
                img: '/card-images/red-sun.png',
                isFlipped: false,
            },
            {
                id: '18',
                name: 'item_8',
                img: '/card-images/research.png',
                isFlipped: false,
            },
            {
                id: '19',
                name: 'item_9',
                img: '/card-images/rocket.png',
                isFlipped: false,
            },
            {
                id: '20',
                name: 'item_10',
                img: '/card-images/shooting-star.png',
                isFlipped: false,
            },
        ].sort(() => Math.random() - 0.5),
        selectedItems: [],
        trueItems: [],
    },
    reducers: {
        flipCard: (state, action) => {
            state.items.find(item => item.id === action.payload).isFlipped = true;
        },
        addToSelectedItems: (state, action) => {

            if (state.selectedItems.length === 2)
                state.selectedItems = [];
            if (state.selectedItems.length < 2) {
                state.selectedItems.push(action.payload);
                if (state.selectedItems[1] !== undefined && state.selectedItems[0].name === state.selectedItems[1].name) {
                    state.trueItems.push(state.selectedItems[0], state.selectedItems[1]);
                } else {
                    if (state.selectedItems[1] !== undefined) {
                        state.items.find(item => item.id === state.selectedItems[0].id).isFlipped = false;
                        state.items.find(item => item.id === state.selectedItems[1].id).isFlipped = false;
                    }
                }
            }

            console.log(JSON.stringify(state.selectedItems));
            console.log(JSON.stringify(state.trueItems));

        }
    }
})

export const normalCards = state => state.cards.items;

export const {flipCard, addToSelectedItems} = cardSlice.actions;
export default cardSlice.reducer;
