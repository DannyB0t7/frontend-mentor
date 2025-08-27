import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SocialLinksProfile from "./pages/SocialLinksProfile";
import Home from "./pages/Home";
import BlogPreviewCard from "./pages/BlogPreviewCard";
import QrCodeCard from "./pages/QrCodeCard";
import ProfileCard from "./pages/ProfileCard";
import NftCard from "./pages/NftCard";
import OrderSummaryCard from "./pages/OrderSummaryCard";
import InterativeRatingCard from "./pages/InterativeRatingCard";
import ResultSummary from "./pages/ResultSummary";
import FlyoSummary from "./pages/FlyoSummary";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/socials", element: <SocialLinksProfile /> },
  { path: "/blog", element: <BlogPreviewCard /> },
  { path: "/code", element: <QrCodeCard /> },
  { path: "/profile", element: <ProfileCard /> },
  { path: "/nft", element: <NftCard /> },
  { path: "/order", element: <OrderSummaryCard /> },
  { path: "/rating", element: <InterativeRatingCard /> },
  { path: "/result", element: <ResultSummary /> },
  { path: "/flyo", element: <FlyoSummary /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
