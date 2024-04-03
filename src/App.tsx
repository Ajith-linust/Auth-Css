import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Auth from "./pages/auth";

const Home = lazy(() => import("./pages/home"));

function App() {
  /** Here, For page routing I chose to use useRoutes of react-roter-dom */

  const routes = useRoutes([
    { path: "/login", element: <Auth /> },
    { path: "/signup", element: <Auth /> },
    {
      path: "/",
      element: (
        <Suspense fallback={<>Loading</>}>
          <Home />
        </Suspense>
      ),
    },
  ]);

  return routes;
}

export default App;
