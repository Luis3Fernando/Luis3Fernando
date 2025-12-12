// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    // Aquí agregaremos más slices en el futuro (ej: projects: projectsReducer)
    ui: uiReducer,
  },
});

// Tipos inferidos de la tienda para usarlos en toda la app
// RootState: Representa TODO el estado de tu aplicación (ej: { ui: { isMenuOpen: true } })
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: El tipo de la función para disparar acciones
export type AppDispatch = typeof store.dispatch;