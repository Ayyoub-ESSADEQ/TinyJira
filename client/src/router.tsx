import App from "App";
import { loadBoardData } from "App/Project/Board";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "project/:id",
        element: <App />,
        loader: loadBoardData,
      },
    ],
  },
]);
