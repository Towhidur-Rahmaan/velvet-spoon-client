import { createBrowserRouter } from "react-router-dom";

// Layouts
import Main from "../layouts/Main";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";

// Public Pages
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Reservations from "../pages/Reservations/Reservations";
import AboutPage from "../pages/About/AboutPage";
import ContactPage from "../pages/Contact/ContactPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";

// Dashboard Pages
import AdminHome from "../pages/Dashboard/AdminHome";
import AddMenuItem from "../pages/Dashboard/AddMenuItem";
import ManageMenu from "../pages/Dashboard/ManageMenu";
import ManageReservations from "../pages/Dashboard/ManageReservations";
import AdminRoute from "../components/AdminRoute";
import MyReservations from "../pages/Dashboard/MyReservations";
import Profile from "../pages/Dashboard/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "add-menu-item",
        element: <AddMenuItem />,
      },
      {
        path: "manage-menu",
        element: <ManageMenu />,
      },
      {
        path: "manage-reservations",
        element: <ManageReservations />,
      },
      {
        path: "/dashboard/manage-menu",
        element: (
          <AdminRoute>
            <ManageMenu />
          </AdminRoute>
        ),
      },

      {
        path: "my-reservations",
        element: <MyReservations />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
