import {createSlice} from '@reduxjs/toolkit';

const warenkorbSlice = createSlice({
    name: "warenkorb",
    initialState:{
        produkte: [],
        gesamtbetrag: 0,
        wAnzahl: 0
    },
    reducers:{
        addProdukte: (state, action) => {
            state.produkte.push(action.payload);
            state.wAnzahl += Number(action.payload.menge);
            state.gesamtbetrag += action.payload.preis * action.payload.menge;
        },
        removeProdukte: (state, action) => {
            const leftProdukte = state.produkte.filter((produkt) => produkt._id !== action.payload._id);
            state.produkte = leftProdukte;
            state.wAnzahl -= Number(action.payload.menge);
            state.gesamtbetrag -= action.payload.preis * action.payload.menge;
        },
        leeren: (state) => {
            state.produkte = [],
            state.gesamtbetrag = 0,
            state.wAnzahl = 0
        }
    },
})

export const {addProdukte,removeProdukte, leeren} = warenkorbSlice.actions;
export default warenkorbSlice.reducer;