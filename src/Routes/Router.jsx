import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import PlantDetails from "../Pages/PlantDetails";
import Home from "../Pages/Home";
import AllPlants from "../Pages/AllPlants";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignUpPage";
import ProfilePage from "../Pages/ProfilePage";
import PrivateRouter from "../Provider/PrivateRouter";
import Spinner from "../Components/Spinner";
import AddPlant from "../Pages/AddPlant";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    hydrateFallbackElement: <Spinner></Spinner>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/plants",
        Component: AllPlants,
      },
      {
        path: "/add-plant",
        element: (
          <PrivateRouter>
            <AddPlant></AddPlant>
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <ProfilePage></ProfilePage>
          </PrivateRouter>
        ),
      },
      {
        path: "/plants/:id",
        element: (
          <PrivateRouter>
            <PlantDetails></PlantDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/signup",
        Component: SignupPage,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
export default router;
