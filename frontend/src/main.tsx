import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApolloClientProvider } from "./libs/apollo-client.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloClientProvider>
      <App />
    </ApolloClientProvider>
  </StrictMode>
);
