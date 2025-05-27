let navigate: (path: string) => void;

export const setNavigator = (navFn: typeof navigate) => {
  navigate = navFn;
};

export const navigateTo = (path: string) => {
  if (navigate) {
    navigate(path);
  } else {
    console.warn("Navigator not initialized");
  }
};
