import { useBox } from "../context/box-context";

function Box(props) {
  const { state, type } = props;
  const { dispatch } = useBox();
  return (
    <div className="box">
      {state.map((button) => (
        <button onClick={() => dispatch({ type, id: button.id })}>
          {button.name}
        </button>
      ))}
    </div>
  );
}

export default Box;
