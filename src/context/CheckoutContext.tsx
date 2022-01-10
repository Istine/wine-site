import { createContext, useState } from "react";
import { WineProps } from "../components/shared/Wine";

interface Props {
  wine: Array<WineProps>;
  addToCheckout: (item: WineProps) => void;
  clearItems: () => void;
}

const initialState: Props = {
  wine: [],
  addToCheckout: ({}) => undefined,
  clearItems: () => undefined,
};

export const Context = createContext(initialState);

const GlobalContext: React.FC<{}> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const addToCheckout = (item: WineProps): void => {
    setState((previousState: Props) => {
      return {
        ...previousState,
        wine: [...previousState.wine, item],
      };
    });
  };

  const clearItems = () => {
    setState((prev: Props) => ({
      ...prev,
      wine: [],
    }));
  };

  return (
    <Context.Provider value={{ ...state, addToCheckout, clearItems }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;
