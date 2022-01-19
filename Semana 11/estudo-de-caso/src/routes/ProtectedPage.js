import { useEffect } from "react";
import { listPets } from "../services/pets";

function ProtectedPage() {
  useEffect(() => {
    const request = async () => {
      const response = await listPets();
      console.log(response);
    };
    request();
  });
  return <div>Página protegida</div>;
}

export default ProtectedPage;
