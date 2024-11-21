import App from "./App";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import About from "./pages/About";
import Login from "./pages/Login";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import Popular from "./pages/Popular";
import MovieDetails from "./components/MovieDetails";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/",
            element: <Popular />,
          },

          {
            path: "/now-playing",
            element: <NowPlaying />,
          },
          {
            path: "/top-rated",
            element: <TopRated />,
          },
          {
            path: "/upcoming",
            element: <Upcoming />,
          },
          {
            path: "/movie/:id",
            element: <MovieDetails />,
          },
        ],
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
