import { createElement, Fragment } from "react";
import { useLocation, useNavigate, type NavigateFunction } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import { useEffect } from "react";
import routes from "./config";
import SEO from "@/components/SEO";

let navigateResolver: (navigate: ReturnType<typeof useNavigate>) => void;

declare global {
  interface Window {
    REACT_APP_NAVIGATE: ReturnType<typeof useNavigate>;
  }
}

export const navigatePromise = new Promise<NavigateFunction>((resolve) => {
  navigateResolver = resolve;
});

export function AppRoutes() {
  const element = useRoutes(routes);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.REACT_APP_NAVIGATE = navigate;
    navigateResolver(window.REACT_APP_NAVIGATE);
  });

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0 });
      return;
    }

    const id = decodeURIComponent(location.hash.slice(1));
    [0, 100, 500, 1000].forEach((delay) => {
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      }, delay);
    });
  }, [location.pathname, location.hash]);

  return createElement(Fragment, null, createElement(SEO), element);
}
