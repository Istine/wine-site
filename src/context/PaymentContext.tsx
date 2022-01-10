import { createContext, useState } from "react";

interface Props {
  page: string;
  changePage: (paeg: string) => void;
}

const initialState: Props = {
  page: "description",
  changePage: ({}) => undefined,
};

export const PayContext = createContext(initialState);

const GlobalContext: React.FC<{}> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const changePage = (page: string): void => {
    setState((prev: Props) => ({
      ...prev,
      page: page,
    }));
  };

  return (
    <PayContext.Provider value={{ ...state, changePage }}>
      {children}
    </PayContext.Provider>
  );
};

export default GlobalContext;
