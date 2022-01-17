import { useEffect } from "react";
import { listUsers } from "./services/users";

function App() {
  useEffect(() => {
    const request = async () => {
      const { data } = await listUsers();
      console.log(data);
    };
    request();
  }, []);
  return <div className="App"></div>;
}

export default App;
