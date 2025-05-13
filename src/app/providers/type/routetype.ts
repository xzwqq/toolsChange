import React from "react";

export type Route = {
  path: string;
  element: React.ReactNode;
};

export type RoutesConfig = {
  [key: string]: Route;
};