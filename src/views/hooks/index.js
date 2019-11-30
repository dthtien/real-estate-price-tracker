import { useState } from "react";

export const useOrdering = () => {
  const desc = "desc";
  const asc = "asc";

  const [order, setOrder] = useState({ created_at: "desc" });
  const handleOrdering = name => {
    const ordering = order[name] === desc ? asc : desc;
    setOrder({ [name]: ordering });
  };

  return [order, handleOrdering];
};
