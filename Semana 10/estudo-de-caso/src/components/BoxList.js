import { useBox } from "../context/box-context";
import Box from "./Box";

function BoxList() {
  const { state } = useBox();
  return (
    <>
      <Box type="box-1" state={state.firstBox} />
      <Box type="box-2" state={state.secondBox} />
    </>
  );
}

export default BoxList;
