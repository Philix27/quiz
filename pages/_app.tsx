import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import AppContext from "comp/global/context";

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContext>
          <Component {...pageProps} />
        </AppContext>
      </PersistGate>
    </ReduxProvider>
  );
}
