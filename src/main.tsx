import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import { AuthProvider } from "./common/contexts/JWTContext.tsx";
import { persistor, store } from "./common/redux/store.tsx";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter basename="/Hayati-AI/">
              <App />
            </BrowserRouter>
          </PersistGate>
        </ReduxProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
