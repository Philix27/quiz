import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { persistedRootReducer } from "./persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const selectOnboardingForm = (state: RootState) =>
// state.OnboardingFormReducer;

export const SettingsReduxType = (state: RootState) => state.SettingsReducer;
export const TransHistoryReduxType = (state: RootState) =>
  state.TransactionHistoryReducer;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
