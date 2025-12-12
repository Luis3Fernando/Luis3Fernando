// src/store/slices/uiSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface UiState {
  isMenuOpen: boolean;
}

const initialState: UiState = {
  isMenuOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => { // Opcional, por si lo necesitas explícitamente
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = uiSlice.actions;
export default uiSlice.reducer;