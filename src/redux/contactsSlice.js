import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contaktsInitialState = [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contaktsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
            payload: {
                id: nanoid(),
                name,
                number
            },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;