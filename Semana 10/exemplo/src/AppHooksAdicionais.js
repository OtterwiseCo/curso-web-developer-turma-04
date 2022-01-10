import { useRef, useCallback, useMemo, useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function AppHooksAdicionais() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputElement = useRef(null);
  console.log(inputElement);

  const onClickFocus = () => {
    inputElement.current.focus();
  };

  //   useCallback(() => {
  //       doSomethingExpensive()
  //   }, [mouseEvent])

  //   const memoizedValue = useMemo(() => {
  //     return doSomethingExpensive()
  //   }, [mouseEvent])

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onClickFocus}>Focus</button>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </>
  );
}

export default AppHooksAdicionais;
