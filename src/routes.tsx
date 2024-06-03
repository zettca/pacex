/* eslint-disable */
import { Fragment, Suspense } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import type {
  ActionFunction,
  LoaderFunction,
  RouteObject,
} from "react-router-dom";
import {
  generateModalRoutes,
  generatePreservedRoutes,
  generateRegularRoutes,
} from "@generouted/react-router/core";

type Element = () => JSX.Element;
type Module = {
  default: Element;
  action?: ActionFunction;
  loader?: LoaderFunction;
  Component: Element;
  ErrorBoundary: Element;
  Pending?: Element;
};

const PRESERVED = import.meta.glob<Module>("/src/pages/(_app|404).{jsx,tsx}", {
  eager: true,
});
const MODALS = import.meta.glob<Pick<Module, "Component">>(
  "/src/pages/**/[+]*.{jsx,tsx}",
  { eager: true },
);
const ROUTES = import.meta.glob<Module>([
  "/src/pages/**/[\\w[-]*.{jsx,tsx}",
  "!**/(_app|404).*",
]);

const preservedRoutes =
  generatePreservedRoutes<Omit<Module, "action">>(PRESERVED);
const modalRoutes = generateModalRoutes<Element>(MODALS);

const regularRoutes = generateRegularRoutes<
  RouteObject,
  () => Promise<Partial<Module>>
>(ROUTES, (module, key) => {
  const index =
    /index\.(jsx|tsx)$/.test(key) && !key.includes("pages/index")
      ? { index: true }
      : {};

  return {
    ...index,
    lazy: async () => {
      const {
        Component,
        Pending,
        default: Default,
        ErrorBoundary,
        action,
        loader,
      } = await module();
      const RouteComponent = Default || Component || Fragment;

      const Page = () =>
        Pending ? (
          <Suspense fallback={<Pending />}>
            <RouteComponent />
          </Suspense>
        ) : (
          <RouteComponent />
        );

      return {
        Component: Page,
        ErrorBoundary,
        loader,
        action,
      };
    },
  };
});

const _app = preservedRoutes?.["_app"];
const _404 = preservedRoutes?.["404"];

const Element = _app?.default || Fragment;
const App = () =>
  _app?.Pending ? (
    <Suspense fallback={<_app.Pending />} children={<Element />} />
  ) : (
    <Element />
  );

const app = {
  Component: _app?.default ? App : Outlet,
  ErrorBoundary: _app?.ErrorBoundary,
  loader: _app?.loader,
};
const fallback = { path: "*", Component: _404?.default || Fragment };

export const routes: RouteObject[] = [
  { ...app, children: [...regularRoutes, fallback] },
];
export const Routes = ({ basename }: { basename?: string }) => (
  <RouterProvider router={createBrowserRouter(routes, { basename })} />
);

export const Modals = () => {
  const Modal = modalRoutes[useLocation().state?.modal] || Fragment;
  return <Modal />;
};
