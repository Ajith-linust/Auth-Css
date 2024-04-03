import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Auth from "./pages/auth";

const Home = lazy(() => import("./pages/home"));

function App() {
  /** Here, For page routing I chose to use useRoutes of react-roter-dom */

  const routes = useRoutes([
    { path: "/", element: <Auth /> },
    { path: "/signup", element: <Auth /> },
    {
      path: "/home",
      element: (
        <Suspense fallback={<>Loading</>}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <h1>404 Page not found</h1>,
    },
  ]);

  return routes;
}

export default App;
