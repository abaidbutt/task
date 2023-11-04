import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import TaskProvider, { useTaskContext } from "./contexts/TaskContext";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";

export const lightTheme = {
  background: "white",
  text: "black",
};

export const darkTheme = {
  background: "black",
  text: "white",
};

const queryClient = new QueryClient();

function Main() {
  const { isDarkMode } = useTaskContext();
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <App />
    </ThemeProvider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <TaskProvider>
        <Main />
      </TaskProvider>
    </QueryClientProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
