import { createBrowserRouter, Navigate } from "react-router-dom";
import { ArticleDetailedView } from "../components/ArticleDetailedView/ArticleDetailedView";
import { Layout } from "../pages/Layout/Layout";
import { LandingPage } from "../pages/LandingPage/LandingPage";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/home" replace /> },
      {
        path: "home",
        element: <LandingPage />,
      },
      {
        path: "detailedArticle",
        element: <ArticleDetailedView />,
      },
      {
        path: "*",
        element: <Navigate to="/home" replace />,
      },
    ],
  },
]);
