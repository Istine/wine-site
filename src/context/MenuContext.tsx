import { createContext, useState } from "react";

interface Props {
  status: string;
  toggle: (item: string) => void;
}

const initialState: Props = {
  status: "hide",
  toggle: (item) => undefined,
};

export const ToggleContext = createContext(initialState);

const GlobalContext: React.FC<{}> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const toggle = (item: string): void => {
    setState((prev: Props) => ({
      ...prev,
      status: item,
    }));
  };

  return (
    <ToggleContext.Provider value={{ ...state, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default GlobalContext;
