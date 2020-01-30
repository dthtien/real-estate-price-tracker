import { useState } from "react";

export const useOrdering = (values = { created_at: "desc" }) => {
  const desc = "desc";
  const asc = "asc";

  const [order, setOrder] = useState(values);
  const handleOrdering = name => {
    const ordering = order[name] === desc ? asc : desc;
    setOrder({ [name]: ordering });
  };

  return [order, handleOrdering];
};
