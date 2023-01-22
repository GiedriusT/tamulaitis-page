import { createBrowserRouter } from "react-router-dom";
import { IndexPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

export default router;