import { createContext, useContext, useReducer } from "react";

const initialState = {
  firstBox: [
    {
      id: 0,
      name: "button 0",
    },
    {
      id: 1,
      name: "button 1",
    },
    {
      id: 2,
      name: "button 2",
    },
  ],
  secondBox: [
    {
      id: 3,
      name: "button 3",
    },
    {
      id: 4,
      name: "button 4",
    },
    {
      id: 5,
      name: "button 5",
    },
  ],
};

const BoxContext = createContext();

const useBox = () => {
  const context = useContext(BoxContext);
  if (context === undefined) {
    throw Error("useBox must be used inside a BoxProvider");
  }

  return context;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "box-1": {
      const boxFound = state.firstBox.find((button) => button.id === action.id);
      const newSecondBoxState = state.secondBox.concat(boxFound);
      const newFirstBoxState = state.firstBox.filter(
        (button) => button.id !== action.id,
      );
      return {
        firstBox: newFirstBoxState,
        secondBox: newSecondBoxState,
      };
    }
    case "box-2":
      const boxFound = state.secondBox.find(
        (button) => button.id === action.id,
      );
      const newFirstBoxState = [...state.firstBox, boxFound];
      const newSecondBoxState = state.secondBox.filter(
        (button) => button.id !== action.id,
      );
      return {
        firstBox: newFirstBoxState,
        secondBox: newSecondBoxState,
      };
    default:
      break;
  }
};

const BoxProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BoxContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BoxContext.Provider>
  );
};

export { BoxProvider, useBox };
