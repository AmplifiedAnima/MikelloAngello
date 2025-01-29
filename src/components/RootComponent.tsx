import { useEffect } from "react";
import { Header } from "./Header";
import { Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const RootComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <Header />
      <hr />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};
