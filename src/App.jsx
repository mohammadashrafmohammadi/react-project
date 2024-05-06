import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Posts } from "./views/posts/post.page";
import { Dashboard } from "./views/dashboard/dashboard.page.jsx";
import { RegisterPage } from "./views/register/register.page";
import { LoginPage } from "./views/login/login.page.jsx";
import { IsAuthenticated } from "./components/misc/is-authenticated";
import { DashboardLayout } from "./components/layout/dashboard.layout.jsx";
import { AuthLayout } from "./components/layout/auth.layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <IsAuthenticated>
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      </IsAuthenticated>
    ),
  },
  {
    path: "/posts",
    element: (
      <DashboardLayout>
        <Posts />,
      </DashboardLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <AuthLayout>
        <LoginPage />,
      </AuthLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <AuthLayout>
        <RegisterPage />,
      </AuthLayout>
    ),
  },
]);

export function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
