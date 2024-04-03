import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/login";

const Profile = lazy(() => import("./pages/profile"));

function App() {
  /** Here, For page routing I chose to use useRoutes of react-roter-dom */

  const routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "/profile",
      element: (
        <Suspense fallback={<>Loading</>}>
          <Profile />
        </Suspense>
      ),
    },
  ]);

  return routes;
}

export default App;
