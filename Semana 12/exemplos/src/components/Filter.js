import { useEffect, useState } from "react";

const items = ["banana", "cebola", "pipoca", "batata"];

function Filter() {
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(items.filter((item) => filter && item.includes(filter)));
  }, [filter]);

  console.log(filteredItems);

  return (
    <div>
      <input
        onChange={(event) => setFilter(event.target.value)}
        type="text"
        placeholder="item"
      />
    </div>
  );
}

export default Filter;
