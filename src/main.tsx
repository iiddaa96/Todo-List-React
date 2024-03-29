import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./AppLayout";
import DoneTodos from "./components/DoneTodos";
import TodoList from "./components/TodoList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route index Component={TodoList} />
      <Route path="done-todos" element={<DoneTodos />} />
    </Route>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
