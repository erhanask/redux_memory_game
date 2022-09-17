import {createSlice} from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        items: [
            {
            id: '1', name: 'item_1', img: '/card-images/asteroid.png', isFlipped: false,isFound: false
        }, {
            id: '2', name: 'item_2', img: '/card-images/astronaut.png', isFlipped: false,isFound: false
        }, {
            id: '3', name: 'item_3', img: '/card-images/destroyed.png', isFlipped: false,isFound: false
        }, {
            id: '4', name: 'item_4', img: '/card-images/earth.png', isFlipped: false,isFound: false
        }, {
            id: '5', name: 'item_5', img: '/card-images/jupiter.png', isFlipped: false,isFound: false
        }, {
            id: '6', name: 'item_6', img: '/card-images/planets.png', isFlipped: false,isFound: false
        }, {
            id: '7', name: 'item_7', img: '/card-images/red-sun.png', isFlipped: false,isFound: false
        }, {
            id: '8', name: 'item_8', img: '/card-images/research.png', isFlipped: false,isFound: false
        }, {
            id: '9', name: 'item_9', img: '/card-images/rocket.png', isFlipped: false,isFound: false
        }, {
            id: '10', name: 'item_10', img: '/card-images/shooting-star.png', isFlipped: false,isFound: false
        }, {
            id: '11', name: 'item_1', img: '/card-images/asteroid.png', isFlipped: false,isFound: false
        }, {
            id: '12', name: 'item_2', img: '/card-images/astronaut.png', isFlipped: false,isFound: false
        }, {
            id: '13', name: 'item_3', img: '/card-images/destroyed.png', isFlipped: false,isFound: false
        }, {
            id: '14', name: 'item_4', img: '/card-images/earth.png', isFlipped: false,isFound: false
        }, {
            id: '15', name: 'item_5', img: '/card-images/jupiter.png', isFlipped: false,isFound: false
        }, {
            id: '16', name: 'item_6', img: '/card-images/planets.png', isFlipped: false,isFound: false
        }, {
            id: '17', name: 'item_7', img: '/card-images/red-sun.png', isFlipped: false, isFound: false
        }, {
            id: '18', name: 'item_8', img: '/card-images/research.png', isFlipped: false, isFound: false
        }, {
            id: '19', name: 'item_9', img: '/card-images/rocket.png', isFlipped: false, isFound: false
        }, {
            id: '20', name: 'item_10', img: '/card-images/shooting-star.png', isFlipped: false, isFound: false
        },].sort(() => Math.random() - 0.5),
        selectedItems: [],
        trueItems: [],
        points: 100
    }, reducers: {
        flipCard: (state, action) => {
            if (state.items.filter(item => item.isFlipped === true).length < 2) {
                state.items.find(item => item.id === action.payload).isFlipped = true;
            }
        }, addToSelectedItems: (state, action) => {

            if (state.selectedItems.length === 2) state.selectedItems = [];
            if (state.selectedItems.length < 2) {
                // selected items 2den küçükse içine pushluyoruz.
                state.selectedItems.push(action.payload);
                // eşleşiyorsa kontrolü
                if (state.selectedItems[1] !== undefined && state.selectedItems[0].name === state.selectedItems[1].name) {
                    // eşleşenler trueItems içine
                    state.trueItems.push(state.selectedItems[0], state.selectedItems[1]);
                    state.items.find(item => item.id === state.selectedItems[0].id).isFound = true;
                    state.items.find(item => item.id === state.selectedItems[1].id).isFound = true;
                    state.items.find(item => item.id === state.selectedItems[0].id).isFlipped = false;
                    state.items.find(item => item.id === state.selectedItems[1].id).isFlipped = false;
                    state.points+=50;
                } else {
                    // eşleşmeyenlerin değerleri set ediliyor.
                    if (state.selectedItems[1] !== undefined) {
                        state.items.find(item => item.id === state.selectedItems[0].id).isFlipped = false;
                        state.items.find(item => item.id === state.selectedItems[1].id).isFlipped = false;
                        state.points-=10;
                    }
                }
            }
        }
    }
})

export const normalCards = state => state.cards.items;
export const getPoints = state => state.cards.points;
export const trueCards = state => state.cards.trueItems;


export const {flipCard, addToSelectedItems} = cardSlice.actions;
export default cardSlice.reducer;
