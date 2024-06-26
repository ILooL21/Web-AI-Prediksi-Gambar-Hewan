import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ResultScreen from "./screens/ResultScreen";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}>
      <Route
        index={true}
        path="/"
        element={<HomeScreen />}
      />
      <Route
        path="/result"
        element={<ResultScreen />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
