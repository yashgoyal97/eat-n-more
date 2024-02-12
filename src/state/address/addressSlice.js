import { createSlice, original } from "@reduxjs/toolkit";

const initialState = {
  addressList: null,
  isAddressFormOpen: false,
  count: 0,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    showAddressForm: (state) => {
      state.isAddressFormOpen = true;
    },
    closeAddressForm: (state) => {
      state.isAddressFormOpen = false;
    },
    addAddress: (state, action) => {
      const list = original(state).addressList;
      const { id, ...address } = action.payload;
      state.count = id;
      if (list && Object.keys(list).length) {
        state.addressList = {
          ...list,
          [id]: address,
        };
      } else {
        state.addressList = {
          [id]: address,
        };
      }
    },
    deleteAddress: (state, action) => {
      const list = original(state).addressList;
      const { id } = action.payload;
      if (list && Object.keys(list).length) {
        if (list.hasOwnProperty(id)) {
          delete state.addressList[id];
        }
      }
    },
  },
});

export const { addAddress, deleteAddress, showAddressForm, closeAddressForm } =
  addressSlice.actions;
export default addressSlice.reducer;
