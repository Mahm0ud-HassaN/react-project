import { configureStore, createSlice } from '@reduxjs/toolkit';
import en from '../../Locals/en';
import ar from '../../Locals/ar';

// Language Slice
const langSlice = createSlice({
  name: 'lang',
  initialState: { lang: 'en', content: en },
  reducers: {
    toggleLang: (state) => {
      if (state.lang === 'en') {
        state.lang = 'ar';
        state.content = ar;
      } else {
        state.lang = 'en';
        state.content = en;
      }
    },
  },
});

// Theme Slice
const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'light' },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// Favorites Slice
const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorite: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
      state.favorite = state.favorite.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAdmin: false,
    user: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
    setUserr: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAdmin = false;
      state.user = null;
    },
  },
});

// Export actions
export const { toggleLang } = langSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export const { setAdmin, setUserr, logout } = authSlice.actions;

// Configure the store
const store = configureStore({
  reducer: {
    lang: langSlice.reducer,
    theme: themeSlice.reducer,
    favorite: favoriteSlice.reducer,
    auth: authSlice.reducer, // Add the auth slice here
  },
});

export default store;